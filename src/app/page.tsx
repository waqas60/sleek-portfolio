import Blog from "@/components/Blog";
import GithubGraph from "@/components/GithubGraph";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ViewAll from "@/components/ViewAll";

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
    </div>
  );
}
