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
  name: z.string().min(2, "Tên quá ngắn"),
  email: z.string().email("Địa chỉ email không hợp lệ"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log(values);
    alert("Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại với bạn sớm.");
    form.reset({ name: "", email: "", message: ""});
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
            <h1 className="font-headline text-4xl md:text-5xl">Liên Hệ</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Chúng tôi rất muốn nghe từ bạn. Dù là một câu hỏi về bánh của chúng tôi hay một yêu cầu đặc biệt, chúng tôi ở đây để giúp đỡ.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><Phone className="h-6 w-6 text-accent" /></div>
                    <div>
                        <h3 className="font-headline text-lg">Hotline</h3>
                        <p className="text-muted-foreground">Đối với các đơn hàng và yêu cầu khẩn cấp.</p>
                        <a href="tel:0987654321" className="font-medium text-foreground hover:underline">098.765.4321</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><Clock className="h-6 w-6 text-accent" /></div>
                    <div>
                        <h3 className="font-headline text-lg">Giờ Làm Việc</h3>
                        <p className="text-muted-foreground">Thứ Hai - Chủ Nhật: 9:00 - 21:00</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0"><MapPin className="h-6 w-6 text-accent" /></div>
                    <div>
                        <h3 className="font-headline text-lg">Bếp Bánh Của Chúng Tôi</h3>
                        <p className="text-muted-foreground">123 Phố Bánh, Hoàn Kiếm, Hà Nội</p>
                        <p className="text-sm text-muted-foreground">(Chỉ nhận đơn hàng trực tuyến và giao hàng)</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Gửi Tin Nhắn Cho Chúng Tôi</CardTitle>
                        <CardDescription>Chúng tôi thường trả lời trong vòng vài giờ.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tên</FormLabel>
                                        <FormControl><Input placeholder="Tên của bạn" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>

                                        <FormControl><Input type="email" placeholder="email@cuaban.com" {...field} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="message" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tin nhắn</FormLabel>
                                        <FormControl><Textarea placeholder="Chúng tôi có thể giúp gì cho bạn?" {...field} rows={5} /></FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <Button type="submit">Gửi Tin Nhắn</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
