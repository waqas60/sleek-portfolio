import Blog from "@/components/Blog";
import GithubGraph from "@/components/GithubGraph";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Social";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 mt-10">
      <Hero />
      <Projects />
      <Blog />
      <GithubGraph />
      <div className="flex items-center gap-4 flex-col justify-center mb-20 text-xl">
        <Socials />
        <p className="text-[10px] text-neutral-600 leading-tight tracking-wider mx-auto dark:text-neutral-400">
          Built by
          <span className="font-bold underline decoration-neutral-300">
            {" "}
            waqas
          </span>
          . The source code is available on
          <span>
            <Link
              href={"https://github.com/waqas60/sleek-portfolio"}
              target="_blank"
              className="font-bold underline decoration-neutral-300"
            >
              GitHub
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
