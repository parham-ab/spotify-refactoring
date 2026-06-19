import React from "react";
import { useLocation, Link } from "react-router-dom";
// icons
import { BsSpotify, BsFillInfoCircleFill } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const Sidebar = () => {
  const location = useLocation();
  const sidebarData = [
    {
      path: "/",
      icon: <SiApplemusic className="m-1" />,
      menuText: "All Songs",
    },
    {
      path: "/favorites",
      icon: <MdFavorite className="m-1" />,
      menuText: "Favorites",
    },
    {
      path: "/contact-us",
      icon: <IoMdContact className="m-1" />,
      menuText: "Contact us",
    },
    {
      path: "/about-us",
      icon: <BsFillInfoCircleFill className="m-1" />,
      menuText: "About us",
    },
  ];
  return (
    <aside className="aside-container h-100 shadow-lg">
      <div className="d-flex align-items-center p-3">
        <BsSpotify
          style={{
            fontSize: "27px",
            color: "rgb(29 185 84)",
            cursor: "auto",
          }}
        />
        <h4 className="p-1">Spotify</h4>
      </div>
      <div>
        <ul className="sidebar-list">
          {sidebarData.map((item, index) => (
            <li
              key={index}
              className={
                location.pathname === item.path ? `pathColor` : undefined
              }
            >
              {item.icon}
              <Link to={item.path}>{item.menuText}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
