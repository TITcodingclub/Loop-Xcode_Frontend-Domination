import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

 
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}