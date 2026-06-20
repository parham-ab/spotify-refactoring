import { useLocation, Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import sidebarData from "../../constants/sidebar-data";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="flex flex-col w-50 h-full bg-black text-white py-6 px-3 gap-6">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3">
        <BsSpotify
          className="text-[#1DB954] text-2xl shrink-0"
          style={{ cursor: "auto" }}
        />
        <span className="text-white font-bold text-lg tracking-tight">
          Spotify
        </span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {sidebarData?.map((item, index) => {
          const Icon = item?.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group
                ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <Icon
                className={`text-lg shrink-0 transition-colors duration-200
                  ${isActive ? "text-[#1DB954]" : "text-zinc-400 group-hover:text-white"}`}
              />
              <span>{item.menuText}</span>
              {isActive && (
                <span className="ml-auto w-1 h-4 rounded-full bg-[#1DB954]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom divider + footer hint */}
      <div className="mt-auto px-3">
        <div className="h-px bg-white/10 mb-4" />
        <p className="text-[11px] text-zinc-600 leading-relaxed">
          © 2026 Spotify Clone
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
