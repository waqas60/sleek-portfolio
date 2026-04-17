import Blog from "@/components/Blog";
import GithubGraph from "@/components/GithubGraph";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Hero />
      <Projects />
      <Blog />
      <GithubGraph />
    </div>
  );
}
