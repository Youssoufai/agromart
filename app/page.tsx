import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Features />
      </div>
    </>
  );
}
