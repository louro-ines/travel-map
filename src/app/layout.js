import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'World Trip',
  description: "All the countries we've visited",
  openGraph: {
    title: 'World Trip',
    description: "All the countries we've visited",
    url: 'https://hiworldtrip.netlify.app',
    siteName: 'World Trip',
    images: [
      {
        url: '/og-worldtrip.png',
        width: 800,
        height: 600,
        alt: 'World Trip',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
