import { RiTwitterXFill } from "react-icons/ri";
import { PiGithubLogo } from "react-icons/pi";
import { LiaLinkedin } from "react-icons/lia";
import { SocialType } from "@/types/socials";
import { TbFileDownloadFilled } from "react-icons/tb";

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
  { icon: <TbFileDownloadFilled />, 
    text: "Resume",
    url:"https://drive.google.com/file/d/1F_qNJNrXLGK7GWW2job_2bSlIglDKR9x/view?usp=sharing"
  },
];

export default socials;
