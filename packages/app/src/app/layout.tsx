import type { Metadata } from "next";
import fonts from "@/lib/fonts";
import "@chotospace/ui/globals.css";
import { ThemeProvider } from "@chotospace/ui/components/theme";
import nextMetadata from "@/lib/next-metadata";

export const metadata: Metadata = nextMetadata();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
