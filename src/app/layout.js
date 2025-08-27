import Navbar from "@/components/Navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b1a33]">
        <Navbar/>
        {children}</body>
    </html>
  )
}