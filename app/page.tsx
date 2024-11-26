import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Value from "./components/value";
import Offer from "./components/offer";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Offer />
        <Value />
      </div>
    </>
  );
}
