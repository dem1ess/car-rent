import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Rental Marketplace",
  description: "Discover best car rental deals in your city",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
