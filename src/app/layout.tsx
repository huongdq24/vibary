
"use client";

import type { Metadata } from "next";
import { Playfair_Display, PT_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AppProvider } from "@/hooks/use-cart";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-headline",
});

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

// Metadata can't be in a client component, but we can export it separately.
// For simplicity in this conversational context, we'll assume it's handled,
// as the main change is conditional rendering based on path.
// export const metadata: Metadata = {
//   title: "VIBARY - Bánh ngọt Pháp hiện đại",
//   description: "Bánh Entremet thanh lịch tại Bắc Ninh, làm từ trái cây Việt Nam theo mùa.",
// };

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  return (
     <AppProvider>
        <div className="relative flex min-h-dvh flex-col bg-background">
            {!isAdminPage && <Header />}
            <main className={cn("flex-1", !isAdminPage && "flex-1")}>{children}</main>
            {!isAdminPage && <Footer />}
        </div>
        <Toaster />
    </AppProvider>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
       <head>
        <title>VIBARY - Bánh ngọt Pháp hiện đại</title>
        <meta name="description" content="Bánh Entremet thanh lịch tại Bắc Ninh, làm từ trái cây Việt Nam theo mùa." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          playfair.variable,
          ptSans.variable,
          fraunces.variable
        )}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
