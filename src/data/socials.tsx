import { RiTwitterXFill } from "react-icons/ri";
import { PiGithubLogo } from "react-icons/pi";
import { LiaLinkedin } from "react-icons/lia";
import { SocialType } from "@/types/socials";

const socials: SocialType[] = [
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

export default socials;
