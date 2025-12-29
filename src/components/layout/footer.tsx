import Link from "next/link";
import { Github, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
             <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-foreground" />
              <span className="font-headline text-xl font-semibold">
                Entremet Hanoi
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Bánh ngọt Pháp hiện đại được chế tác cho khẩu vị Việt, sử dụng trái cây tươi theo mùa.
            </p>
            <div className="flex gap-4">
                <Link href="#" aria-label="Facebook page">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </Link>
                <Link href="#" aria-label="Instagram page">
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </Link>
                <Link href="#" aria-label="Twitter page">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold tracking-wider">Cửa Hàng</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">Tất Cả Sản Phẩm</Link></li>
              <li><Link href="/products?collection=special-occasions" className="text-sm text-muted-foreground hover:text-foreground">Bánh Sinh Nhật</Link></li>
              <li><Link href="/products?collection=half-entremet" className="text-sm text-muted-foreground hover:text-foreground">Half Entremet</Link></li>
              <li><Link href="/quiz" className="text-sm text-muted-foreground hover:text-foreground">Trắc Nghiệm Hương Vị</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold tracking-wider">Về Chúng Tôi</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">Câu Chuyện</Link></li>
              <li><Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">Tin Tức</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Liên Hệ</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-headline text-sm font-semibold tracking-wider">Bản Tin</h3>
             <p className="mt-4 text-sm text-muted-foreground">Đăng ký để nhận tin tức ngọt ngào và ưu đãi đặc biệt.</p>
             <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Email của bạn" className="max-w-xs" />
                <Button type="submit" variant="outline">Đăng Ký</Button>
             </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Entremet Hanoi. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  );
}
