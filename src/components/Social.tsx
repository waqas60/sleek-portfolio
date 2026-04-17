import { RiTwitterXFill } from "react-icons/ri";
import { PiGithubLogo } from "react-icons/pi";
import { LiaLinkedin } from "react-icons/lia";
import Link from "next/link";

const socials = [
  { icon: <RiTwitterXFill />, text: "X", url: "https://x.com/Waqas122005" },
  {
    icon: <LiaLinkedin />,
    text: "Linkedin",
    url: "https://www.linkedin.com/in/m-waqas-a5b71831a/",
  },
  {
    icon: <PiGithubLogo />,
    text: "Github",
    url: "https://github.com/waqas60/",
  },
];

export default function Socials() {
  return (
    <div className="ml-2 mt-8 flex items-center gap-2">
      {socials.map((app, index) => (
        <div
          key={index}
          className="group text-md relative text-neutral-500 dark:text-neutral-200"
        >
          <Link href={app.url} target="_blank">
            {app.icon}
          </Link>

          <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 translate-y-1 rounded bg-neutral-700 px-2 py-0.5 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
            {app.text}
          </span>
        </div>
      ))}
    </div>
  );
}
