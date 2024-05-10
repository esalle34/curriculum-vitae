import { Inter } from "next/font/google";
import "../globals.css";
import { Params } from "../types";
import { PropsWithChildren } from "react";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  params: Params;
}

export default function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<Props>) {
  return (
    <html lang={locale.split("-")[0]}>
      <body className={inter.className}>
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
}
