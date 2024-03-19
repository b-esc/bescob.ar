import type { Metadata } from "next";
import {NextUIProviders} from "./nextUIProviders";
import { Inter } from "next/font/google";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "bescob.ar",
//   description: "bescobar",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <NextUIProviders>
          {children}
        </NextUIProviders>
      </body>
    </html>
  );
}
