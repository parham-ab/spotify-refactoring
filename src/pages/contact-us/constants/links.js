import { MdEmail } from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const links = [
  {
    label: "Github",
    href: "https://github.com/parham-ab",
    icon: BsGithub,
    color: "hover:bg-zinc-700 hover:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parham-abolghasemi/",
    icon: BsLinkedin,
    color: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    label: "Email",
    href: "mailto:parham.abg1@gmail.com",
    icon: MdEmail,
    color: "hover:bg-[#EA4335] hover:text-white",
    target: "_self",
  },
  {
    label: "Website",
    href: "https://parham-ab.netlify.app/",
    icon: FaInternetExplorer,
    color: "hover:bg-[#4e4ed2] hover:text-white",
  },
];

export default links;
