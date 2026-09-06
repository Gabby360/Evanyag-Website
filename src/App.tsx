import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Businesses } from "@/components/site/Businesses";
import { Capabilities } from "@/components/site/Capabilities";
import { Reach } from "@/components/site/Reach";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { Trust } from "@/components/site/Trust";
import { ContactCta } from "@/components/site/ContactCta";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Businesses />
        <Capabilities />
        <Reach />
        <Stats />
        <Process />
        <Trust />
        <ContactCta />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
