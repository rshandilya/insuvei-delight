//import { useSignal } from "@preact/signals";
//import Counter from "../islands/Counter.tsx";
import Hero from "../components/Hero.tsx";
import Features from "../components/Features.tsx";
import Gallery from "../components/Gallery.tsx";



export default function Home() {
  //const count = useSignal(3);
  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
    </div>
  );
}
