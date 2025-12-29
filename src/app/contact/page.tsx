"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, MapPin } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    alert("Thank you for your message! We will get back to you shortly.");
    form.reset({ name: "", email: "", message: ""});
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl md:text-5xl">Get in Touch</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                We'd love to hear from you. Whether it's a question about our cakes or a special request, we're here to help.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><Phone className="h-6 w-6 text-accent" /></div>
                    <div>
                        <h3 className="font-headline text-lg">Hotline</h3>
                        <p className="text-muted-foreground">For urgent orders and inquiries.</p>
                        <a href="tel:0987654321" className="font-medium text-foreground hover:underline">098.765.4321</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><Clock className="h-6 w-6 text-accent" /></div>
                    <div>
                        <h3 className="font-headline text-lg">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><MapPin className="h-6 w-6 text-accent" /></div>
                    <div>
                        <h3 className="font-headline text-lg">Our Kitchen</h3>
                        <p className="text-muted-foreground">123 Cake Avenue, Hoan Kiem, Hanoi</p>
                        <p className="text-sm text-muted-foreground">(Online orders and delivery only)</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Send us a Message</CardTitle>
                        <CardDescription>We typically respond within a few hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl><Textarea placeholder="How can we help you?" {...field} rows={5} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <Button type="submit">Send Message</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
