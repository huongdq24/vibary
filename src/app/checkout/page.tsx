"use client";

import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRouter } from "next/navigation";

const checkoutSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter a valid address in Hanoi." }),
  deliveryDate: z.string().min(1, { message: "Please select a delivery date." }),
  deliveryTime: z.string().min(1, { message: "Please select a delivery time." }),
  paymentMethod: z.enum(["momo", "zalopay", "bank", "cod"], { required_error: "Please select a payment method." }),
});

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      deliveryDate: "",
      deliveryTime: "",
    },
  });

  function onSubmit(values: z.infer<typeof checkoutSchema>) {
    console.log(values);
    // Here you would typically process the payment and create the order
    alert("Order placed successfully! (This is a demo)");
    clearCart();
    router.push("/");
  }

  if (cartItems.length === 0) {
    return (
        <div className="container mx-auto text-center py-20">
            <h1 className="font-headline text-2xl">Your cart is empty.</h1>
        </div>
    )
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1 className="font-headline text-3xl mb-8">Checkout</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Customer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="Nguyen Van A" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input placeholder="0987654321" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Delivery Details (Hanoi only)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField control={form.control} name="address" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl><Input placeholder="123 Example Street, Hoan Kiem District" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                     <FormField control={form.control} name="deliveryDate" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Delivery Date</FormLabel>
                            <FormControl><Input type="date" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                     <FormField control={form.control} name="deliveryTime" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Delivery Time</FormLabel>
                            <FormControl><Input type="time" {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                  </div>
                </CardContent>
              </Card>
              
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                   <FormField control={form.control} name="paymentMethod" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                    <div className="flex items-center space-x-2 rounded-md border p-4"><RadioGroupItem value="momo" id="momo" /><Label htmlFor="momo">Momo</Label></div>
                                    <div className="flex items-center space-x-2 rounded-md border p-4"><RadioGroupItem value="zalopay" id="zalopay" /><Label htmlFor="zalopay">ZaloPay</Label></div>
                                    <div className="flex items-center space-x-2 rounded-md border p-4"><RadioGroupItem value="bank" id="bank" /><Label htmlFor="bank">Bank Transfer (Chuyển khoản)</Label></div>
                                    <div className="flex items-center space-x-2 rounded-md border p-4"><RadioGroupItem value="cod" id="cod" /><Label htmlFor="cod">Cash on Delivery (COD)</Label></div>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage className="pt-2"/>
                        </FormItem>
                        )}
                    />
                </CardContent>
              </Card>

              <Button type="submit" size="lg" className="w-full">Place Order</Button>
            </form>
          </Form>
        </div>
        <div className="lg:col-span-2">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 divide-y">
                     {cartItems.map(item => {
                         const image = PlaceHolderImages.find(p => p.id === item.imageId);
                         return (
                            <div key={`${item.id}-${item.size}`} className="flex items-center pt-4">
                                <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                    {image && <Image src={image.imageUrl} alt={item.name} fill className="object-cover" />}
                                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{item.quantity}</span>
                                </div>
                                <div className="ml-4 flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    {item.size && <p className="text-sm text-muted-foreground">{item.size}</p>}
                                </div>
                                <p className="font-medium">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}</p>
                            </div>
                         )
                     })}
                     <div className="space-y-2 pt-4">
                        <div className="flex justify-between text-muted-foreground">
                            <span>Subtotal</span>
                            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</span>
                        </div>
                         <div className="flex justify-between text-muted-foreground">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                         <div className="flex justify-between font-bold text-lg pt-2 border-t">
                            <span>Total</span>
                            <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</span>
                        </div>
                     </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
