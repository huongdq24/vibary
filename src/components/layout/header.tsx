"use client";

import Link from "next/link";
import {
  Menu,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function AnnouncementBar() {
  return (
     <div className="bg-background text-foreground border-t">
        <div className="container mx-auto flex h-10 max-w-full items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-body text-sm text-black">
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" />GẤP GÁP ĐẶT BÁNH GỌI 091 255 03 35</span>
              <span>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" />GẤP GÁP ĐẶT BÁNH GỌI 091 255 03 35</span>
              <span>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" />GẤP GÁP ĐẶT BÁNH GỌI 091 255 03 35</span>
              <span>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" />GẤP GÁP ĐẶT BÁNH GỌI 091 255 03 35</span>
              <span>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</span>
          </div>
        </div>
      </div>
  )
}

const mainNavLinks = [
    { href: '/products', label: 'SẢN PHẨM' },
    { href: '/faq', label: 'CÁCH MUA' },
    { href: '/about', label: 'VỀ VIBARY' },
]

const secondaryNavLinks = [
    { href: '/faq', label: 'HỎI ĐÁP' },
    { href: '/news', label: 'TIN MỚI' },
]

export function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-6 md:flex">
          {mainNavLinks.map(link => (
             <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "text-sm font-body uppercase tracking-wider text-black transition-colors hover:text-black/70",
                    pathname === link.href && "font-bold"
                )}
            >
                {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-center flex-1 md:flex-none">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-headline text-3xl font-bold tracking-widest text-foreground">
              VIBARY
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 md:flex">
             {secondaryNavLinks.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "text-sm font-body uppercase tracking-wider text-black transition-colors hover:text-black/70",
                        pathname === link.href && "font-bold"
                    )}
                >
                    {link.label}
                </Link>
             ))}
          </nav>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" className="flex items-center gap-1 text-sm font-body uppercase tracking-wider text-black">
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden md:inline">GIỎ</span>
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
                  {[...mainNavLinks, ...secondaryNavLinks].map((link) => (
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
