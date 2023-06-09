import About from "./components/about";
import Banner from "./components/Banner";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className="container relative h-full w-full flex items-center flex-col overflow-x-hidden">
      <Banner />
      <About />
      <Experience />
    </div>
  );
}
