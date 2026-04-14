import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GEM PORTO",
  description: "A minimal catalogue for rare stones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}