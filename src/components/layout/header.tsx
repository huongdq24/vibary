"use client";

import Link from "next/link";
import {
  Menu,
  Phone,
  ShoppingCart,
  Truck,
  BookUser,
  Newspaper,
  HelpCircle
} from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { Logo } from "@/components/icons";

function AnnouncementBar() {
  return (
     <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex h-10 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
              <span className="flex items-center gap-1 text-xs">TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
              <span className="flex items-center gap-1 text-xs">GẤP GÁP ĐẶT BÁNH GỌI 📞 091 255 03 35</span>
              <span className="flex items-center gap-1 text-xs">TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
              <span className="flex items-center gap-1 text-xs">GẤP GÁP ĐẶT BÁNH GỌI 📞 091 255 03 35</span>
              <span className="flex items-center gap-1 text-xs">TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
              <span className="flex items-center gap-1 text-xs">GẤP GÁP ĐẶT BÁNH GỌI 📞 091 255 03 35</span>
          </div>
        </div>
      </div>
  )
}

export function Header() {
  const { cartCount } = useCart();

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/products"
            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Sản phẩm
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Về Vibary
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Hỏi đáp
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-3xl font-bold tracking-widest text-foreground">
              VIBARY
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
             <Link
                href="/news"
                className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                Tin mới
              </Link>
          </nav>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Giỏ hàng</span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Chuyển đổi menu điều hướng</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                   <span className="font-headline text-2xl font-bold tracking-widest">
                    VIBARY
                  </span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
    </header>
    <AnnouncementBar />
    </>
  );
}
