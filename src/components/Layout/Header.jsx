import { useContext, useEffect, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";

const Header = () => {
  const {
    songData,
    songTrack,
    toggleFavorite,
    currentSong,
    setCurrentSong,
    nextSongHandle,
    prevSongHandle,
  } = useContext(SpotifyContext);

  const [defaultSong, setDefaultSong] = useState([]);
  const [changed, setChanged] = useState(false);
  const [songTimeLive, setSongTimeLive] = useState(0);
  const [songTimeFull, setSongTimeFull] = useState(0);

  const readableTime = (time) =>
    `${Math.trunc(time / 60)}:${("0" + Math.trunc(time % 60)).slice(-2)}`;

  useEffect(() => {
    if (!currentSong.length) {
      const intendedSong = songData.find((item) => item.title === "Style");
      setDefaultSong(intendedSong);
    }
    const playingSong = songData.filter((item) => item.isPlaying);
    setCurrentSong(playingSong);
  }, [songData]);

  useEffect(() => {
    setInterval(() => {
      setSongTimeLive(songTrack.current.currentTime);
      setSongTimeFull(songTrack.current.duration);
    }, 1000);
  }, [currentSong]);

  const playHandle = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isPlaying = !newSongData[songIndex].isPlaying;
    if (newSongData[songIndex].isPlaying) {
      songTrack.current.play();
    } else {
      songTrack.current.pause();
    }
    setChanged(!changed);
  };

  const progressPercent = songTimeFull
    ? (songTimeLive / songTimeFull) * 100
    : 0;

  const SongDisplay = ({ item, isActive }) => (
    <div className="flex items-center gap-6 w-full px-6 py-4">
      {/* Album cover */}
      <div className="hidden sm:block shrink-0">
        <div
          className="w-16 h-16 rounded-lg bg-cover bg-center bg-zinc-900 shadow-lg"
          style={{ backgroundImage: `url(${item?.cover})` }}
        />
      </div>

      {/* Title + singer */}
      <div className="flex flex-col min-w-0 w-36 shrink-0">
        <p className="text-white text-sm font-semibold truncate">
          {item?.title ?? "—"}
        </p>
        <p className="text-zinc-500 text-xs mt-0.5 truncate">
          {item?.singer ?? "—"}
        </p>
      </div>

      {/* Controls + scrubber — center */}
      <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
        {/* Playback buttons */}
        {isActive && (
          <div className="flex items-center gap-5">
            <button
              onClick={prevSongHandle}
              className="text-zinc-500 hover:text-white transition-colors duration-150"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => playHandle(item.id)}
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              {item.isPlaying ? (
                <BsPauseFill className="text-black text-base" />
              ) : (
                <BsPlayFill className="text-black text-base ml-0.5" />
              )}
            </button>
            <button
              onClick={nextSongHandle}
              className="text-zinc-500 hover:text-white transition-colors duration-150"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        )}

        {/* Scrubber */}
        <div className="w-full flex items-center gap-3">
          <span className="text-[10px] text-zinc-600 tabular-nums shrink-0">
            {isActive ? readableTime(songTimeLive) : "0:00"}
          </span>
          <div className="relative flex-1 h-1 rounded-full bg-zinc-800 group">
            <div
              className="absolute top-0 left-0 h-full bg-[#1DB954] rounded-full pointer-events-none"
              style={{ width: `${progressPercent}%` }}
            />
            {isActive && (
              <input
                type="range"
                step={1}
                min={0}
                max={isNaN(songTimeFull) ? 100 : songTimeFull}
                value={songTimeLive}
                onChange={(e) =>
                  (songTrack.current.currentTime = e.target.value)
                }
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            )}
          </div>
          <span className="text-[10px] text-zinc-600 tabular-nums shrink-0">
            {isActive && !isNaN(songTimeFull)
              ? readableTime(songTimeFull)
              : "0:00"}
          </span>
        </div>
      </div>

      {/* Favorite */}
      <div className="shrink-0">
        <button
          onClick={() => toggleFavorite(item?.id)}
          className="transition-transform duration-150 hover:scale-110"
        >
          {item?.isFavorite ? (
            <MdFavorite className="text-[#1DB954] text-xl" />
          ) : (
            <MdOutlineFavoriteBorder className="text-zinc-600 hover:text-zinc-300 text-xl transition-colors" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <header className="bg-black border-b border-white/[0.06] w-full">
      {currentSong.length ? (
        currentSong.map((item) => (
          <SongDisplay key={item.id} item={item} isActive={true} />
        ))
      ) : (
        <SongDisplay item={defaultSong} isActive={false} />
      )}
    </header>
  );
};

export default Header;
