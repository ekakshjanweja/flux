import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";
import { DialogProvider } from "@/providers/dialog-provider";
import { Suspense } from "react";
import { Loading } from "@/components/auth/loading";

//const inter = Inter({ subsets: ["latin"] });

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: "flux",
  description: "flux by stormej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />
              <DialogProvider />
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
