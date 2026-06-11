import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Streams } from "@/components/sections/Streams";
import { Features } from "@/components/sections/Features";
import { TeachersOverview } from "@/components/sections/TeachersOverview";
import { StudentReviews } from "@/components/sections/StudentReviews";
import { ProblemReels } from "@/components/sections/ProblemReels";
import { Community } from "@/components/sections/Community";
import { AppDownload } from "@/components/sections/AppDownload";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Stats />
        <Streams />
        <Features />
        <TeachersOverview />
        <StudentReviews />
        <ProblemReels />
        <Community />
        <AppDownload />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
