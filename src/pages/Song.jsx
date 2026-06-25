import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import useSpotifyStore from "../store/spotifyStore";

const Song = ({ item }) => {
  const songData = useSpotifyStore((s) => s.songData);
  const playHandle = useSpotifyStore((s) => s.playHandle);
  const toggleFavorite = useSpotifyStore((s) => s.toggleFavorite);
  return (
    <div
      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer group transition-colors duration-150
        ${item.active ? "bg-white/10" : "hover:bg-white/5"}`}
      onClick={() => playHandle(item.id)}
    >
      {/* Left: cover + info */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Cover */}
        <div
          className={`relative hidden sm:block w-12 h-12 rounded-full bg-cover bg-center shrink-0 bg-zinc-900 ${item.active ? "animate-spin" : ""}`}
          style={{
            backgroundImage: `url(${item.cover})`,
            animationDuration: "8s",
          }}
        ></div>

        {/* Title + singer */}
        <div
          className="flex flex-col min-w-0"
          onClick={() => playHandle(item.id)}
        >
          <span
            className={`text-sm font-medium truncate leading-tight
              ${item.active ? "text-[#1DB954]" : ""}`}
          >
            {item?.title}
          </span>
          <span className="text-xs text-zinc-500 truncate mt-0.5">
            {item?.singer}
          </span>
        </div>
      </div>

      {/* Right: favorite */}
      <button
        onClick={(e) => {
          toggleFavorite(item.id);
          e.stopPropagation();
        }}
        className="shrink-0 ml-3 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-150 hover:scale-110"
      >
        {item.isFavorite ? (
          <MdFavorite className="text-[#1DB954] text-lg" />
        ) : (
          <MdOutlineFavoriteBorder className="text-zinc-600 hover:text-zinc-300 text-lg transition-colors" />
        )}
      </button>
    </div>
  );
};

export default Song;
