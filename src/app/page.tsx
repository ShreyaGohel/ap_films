import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Showcase from "@/components/sections/Showcase";
import Gallery from "@/components/sections/Gallery";
import Offerings from "@/components/sections/Offerings";
import Belief from "@/components/sections/Belief";
import Memories from "@/components/sections/Memories";
import Moments from "@/components/sections/Moments";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Showcase />
        <Gallery />
        <Offerings />
        <Belief />
        <Memories />
        <Moments />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
