import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./home/header/page";
import NavBar from "./home/navbar/page";
import Content from "./home/content/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center h-full">
          <Header />
          <NavBar />
          <Content />
          {children}
        </div>
      </body>
    </html>
  );
}
