import { SiApplemusic } from "react-icons/si";
import { MdFavorite } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const sidebarData = [
  {
    path: "/songs",
    icon: SiApplemusic,
    menuText: "All Songs",
  },
  {
    path: "/favorites",
    icon: MdFavorite,
    menuText: "Favorites",
  },
  {
    path: "/contact-us",
    icon: IoMdContact,
    menuText: "Contact us",
  },
];
export default sidebarData;
