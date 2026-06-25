import { useEffect, useState } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { TbMoodCry } from "react-icons/tb";
import useSpotifyStore from "../store/spotifyStore";

const Favorites = () => {
  const songData = useSpotifyStore((s) => s.songData);
  const getCurrentSong = useSpotifyStore((s) => s.getCurrentSong);
  const currentSong = getCurrentSong();
  const playHandle = useSpotifyStore((s) => s.playHandle);
  const toggleFavorite = useSpotifyStore((s) => s.toggleFavorite);
  const nextSongHandle = useSpotifyStore((s) => s.nextSongHandle);
  const prevSongHandle = useSpotifyStore((s) => s.prevSongHandle);
  const [favoriteSelections, setFavoriteSelections] = useState([]);

  useEffect(() => {
    setFavoriteSelections(songData.filter((item) => item.isFavorite));
  }, [songData]);

  return (
    <div className="flex flex-col h-full overflow-auto bg-black pr-1 py-4">
      <p className="text-[11px] uppercase tracking-widest text-zinc-300 mb-4 px-2">
        Liked songs
      </p>

      {favoriteSelections.length ? (
        favoriteSelections.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer group transition-colors duration-150
              ${item.active ? "bg-white/10" : "hover:bg-white/5"}`}
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
                  {item.title}
                </span>
                <span className="text-xs text-zinc-500 truncate mt-0.5">
                  {item.singer}
                </span>
              </div>
            </div>

            {/* Favorite toggle */}
            <button
              onClick={() => toggleFavorite(item.id)}
              className="shrink-0 ml-3 transition-all duration-150 hover:scale-110"
            >
              {item.isFavorite ? (
                <MdFavorite className="text-[#1DB954] text-lg" />
              ) : (
                <MdOutlineFavoriteBorder className="text-zinc-600 hover:text-zinc-300 text-lg transition-colors" />
              )}
            </button>
          </div>
        ))
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center pb-10">
          <TbMoodCry className="text-zinc-700 text-5xl" />
          <div>
            <p className=" text-sm font-medium">No liked songs yet</p>
            <p className="text-zinc-400 text-xs mt-1">
              Songs you like will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
