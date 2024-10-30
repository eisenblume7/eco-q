import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eco-Q",
  description: "Your best plaform",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400&display=swap"
            rel="stylesheet"
        />
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-primary`}
      >
      {children}
      </body>
      </html>
  );
}
