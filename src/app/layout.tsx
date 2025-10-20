import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { CartProvider } from "@/contexts/CartContext";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The SME CFO - Enterprise Financial Services for African SMEs",
  description:
    "Professional CFO services for Small and Medium Enterprises across Africa. Get financial statements, performance reporting, tax preparation, and expert financial guidance.",
  keywords:
    "CFO services, SME finance, African business, financial statements, tax preparation, Nigeria, financial consulting",
  authors: [{ name: "The SME CFO" }],
  openGraph: {
    title: "The SME CFO - Enterprise Financial Services",
    description: "Professional CFO services for African SMEs",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <div className="flex-1">{children}</div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
