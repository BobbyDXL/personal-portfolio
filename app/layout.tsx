import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitch } from "@/components/theme-switcher";
import { Suspense } from 'react';
import { Loading } from '@/components/ui/loading';
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CommandPalette } from "@/components/ui/command-palette";
import { ToastProvider } from "@/components/ui/toast";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk", 
});

export const metadata: Metadata = {
  title: "David Chen | Portfolio",
  description: "Full Stack Developer & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<Loading />}>
            <ToastProvider>
              {children}
              <ScrollToTop />
              <CommandPalette />
            </ToastProvider>
          </Suspense>
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
