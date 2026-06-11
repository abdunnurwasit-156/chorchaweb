import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
