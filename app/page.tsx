import Navbar from "@/app/components/navbar";
import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
      </div>
    </>
  );
}
