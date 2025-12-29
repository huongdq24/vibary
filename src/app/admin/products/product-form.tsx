
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products } from '@/lib/data';
import type { Product } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const productSchema = z.object({
    name: z.string().min(3, { message: "Tên sản phẩm phải có ít nhất 3 ký tự." }),
    price: z.coerce.number().min(0, { message: "Giá không được là số âm." }),
    stock: z.coerce.number().min(0, { message: "Tồn kho không được là số âm." }),
    categorySlug: z.string({ required_error: "Vui lòng chọn danh mục." }),
    description: z.string().min(10, { message: "Mô tả phải có ít nhất 10 ký tự." }),
});

type ProductFormValues = z.infer<typeof productSchema>;

const productCategories = [
    { slug: 'banh-sinh-nhat', title: 'Bánh sinh nhật' },
    { slug: 'banh-ngot', title: 'Bánh ngọt' },
    { slug: 'banh-man', title: 'Bánh mặn' },
    { slug: 'do-uong', title: 'Đồ uống' },
    { slug: 'banh-khac', title: 'Bánh khác' },
    { slug: 'do-an-khac', title: 'Đồ ăn khác' },
];

interface ProductFormProps {
  product?: Product;
  onSuccess: () => void;
}

export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const { toast } = useToast();
  const defaultValues = product ? {
      name: product.name,
      price: product.price,
      stock: product.stock,
      categorySlug: product.categorySlug,
      description: product.description,
  } : {
      name: "",
      price: 0,
      stock: 0,
      categorySlug: "",
      description: "",
  }

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  const onSubmit = (data: ProductFormValues) => {
    console.log("Form data submitted:", data);
    
    // This is where you would typically call an API to save the data.
    // For this demo, we'll just show a success toast.
    
    toast({
        title: product ? "Cập nhật thành công!" : "Thêm thành công!",
        description: `Sản phẩm "${data.name}" đã được ${product ? 'cập nhật' : 'thêm'}.`,
    });

    onSuccess();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên sản phẩm</FormLabel>
              <FormControl>
                <Input placeholder="BE IN BLOSSOM" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
             <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Giá</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="650000" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tồn kho</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder="15" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>
        <FormField
            control={form.control}
            name="categorySlug"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Danh mục</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Chọn một danh mục" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    {productCategories.map(cat => (
                        <SelectItem key={cat.slug} value={cat.slug}>{cat.title}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mô tả ngắn</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Mô tả ngắn về sản phẩm..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{product ? 'Lưu thay đổi' : 'Thêm sản phẩm'}</Button>
      </form>
    </Form>
  );
}
