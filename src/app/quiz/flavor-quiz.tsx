"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { recommendCake } from "@/ai/flows/flavor-recommendation-quiz";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Loader2 } from "lucide-react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

const formSchema = z.object({
  preferredFruits: z.string().min(1, "Please enter at least one fruit."),
  sweetnessLevel: z.enum(["not_too_sweet", "moderately_sweet", "very_sweet"], {
    required_error: "Please select your preferred sweetness level.",
  }),
  occasion: z.enum(["birthday", "anniversary", "casual", "gift"], {
    required_error: "Please select an occasion.",
  }),
  personalityTraits: z.string().min(1, "Please describe your personality."),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: "step1", fields: ["preferredFruits"] },
  { id: "step2", fields: ["sweetnessLevel"] },
  { id: "step3", fields: ["occasion"] },
  { id: "step4", fields: ["personalityTraits"] },
];

export function FlavorQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    cakeName: string;
    reason: string;
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferredFruits: "",
      sweetnessLevel: undefined,
      occasion: undefined,
      personalityTraits: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const result = await recommendCake(data);
      const recommendedProductName = result.cakeRecommendation.split('(')[0].trim();
      setRecommendation({ cakeName: recommendedProductName, reason: result.addCartLink });
    } catch (error) {
      console.error("Error getting recommendation:", error);
      // Handle error state in UI
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleNext = async () => {
    const fields = steps[currentStep].fields as (keyof FormData)[];
    const output = await form.trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
        await form.handleSubmit(onSubmit)();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const recommendedProduct = products.find(p => p.name.toLowerCase() === recommendation?.cakeName.toLowerCase());

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="mt-4 text-lg text-muted-foreground font-headline">Finding your perfect cake...</p>
      </div>
    );
  }

  if (recommendation) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">We found your perfect match!</CardTitle>
          <CardDescription>{recommendation.reason}</CardDescription>
        </CardHeader>
        <CardContent>
            {recommendedProduct ? (
                <ProductCard product={recommendedProduct} />
            ) : (
                <p className="text-center text-muted-foreground">Could not find the recommended product. But we think you'll love our selection!</p>
            )}
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button onClick={() => { setRecommendation(null); setCurrentStep(0); form.reset(); }}>
                Take the Quiz Again
            </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-headline text-center text-3xl">
          Find Your Perfect Flavor
        </CardTitle>
        <CardDescription className="text-center">
          Answer a few questions and we'll recommend the perfect Entremet for you.
        </CardDescription>
        <Progress value={(currentStep + 1) * 25} className="mt-4" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8">
            {currentStep === 0 && (
              <FormField
                control={form.control}
                name="preferredFruits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">What are your favorite fruits? (e.g., strawberry, mango, passion fruit)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your favorite fruits..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {currentStep === 1 && (
              <FormField
                control={form.control}
                name="sweetnessLevel"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-lg">How sweet do you like your desserts?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="not_too_sweet" />
                          </FormControl>
                          <FormLabel className="font-normal">Not too sweet, I prefer a hint of tartness.</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="moderately_sweet" />
                          </FormControl>
                          <FormLabel className="font-normal">Balanced and moderately sweet.</FormLabel>
                        </FormItem>
                         <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="very_sweet" />
                          </FormControl>
                          <FormLabel className="font-normal">I have a sweet tooth, bring it on!</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
             {currentStep === 2 && (
              <FormField
                control={form.control}
                name="occasion"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-lg">What's the occasion?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="birthday" />
                          </FormControl>
                          <FormLabel className="font-normal">A festive birthday celebration</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="anniversary" />
                          </FormControl>
                          <FormLabel className="font-normal">A romantic anniversary or date night</FormLabel>
                        </FormItem>
                         <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="casual" />
                          </FormControl>
                          <FormLabel className="font-normal">A casual treat for myself or with friends</FormLabel>
                        </FormItem>
                         <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="gift" />
                          </FormControl>
                          <FormLabel className="font-normal">An elegant gift for someone special</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {currentStep === 3 && (
                 <FormField
                    control={form.control}
                    name="personalityTraits"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Describe your personality in a few words. (e.g., adventurous, classic, sophisticated)</FormLabel>
                        <FormControl>
                        <Input placeholder="Enter some personality traits..." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrev} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>
          {currentStep === steps.length - 1 ? "Get Recommendation" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
}
