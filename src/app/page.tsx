import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import GithubGraph from "@/components/GithubGraph";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Social";
import ViewAll from "@/components/ViewAll";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Hero />
      <Projects limit={2} />
      <div className="relative w-full">
        <ViewAll link="/projects" />
      </div>
      <Blog />
      <div className="relative w-full">
        <ViewAll link="/blogs" />
      </div>
      <GithubGraph />
      <div className="flex items-center gap-4 flex-col justify-center mb-20 text-xl">
        <Socials />
        <Footer/>
      </div>
    </div>
  );
}
