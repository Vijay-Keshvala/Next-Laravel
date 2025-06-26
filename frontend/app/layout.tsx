import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "@/components/Navbar";
import {Toaster} from "react-hot-toast"

export const metadata: Metadata = {
  title: "My Next app",
  description: "CRUD based next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster/>
        <Navbar/>
        {/* <h1>Welcome to next js app</h1> */}
        {children}
      </body>
    </html>
  );
}
