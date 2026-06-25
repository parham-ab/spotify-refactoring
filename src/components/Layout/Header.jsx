import { useEffect, useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import useSpotifyStore from "../../store/spotifyStore";

const SongDisplay = ({
  item,
  isActive,
  songTimeLive,
  songTimeFull,
  progressPercent,
  onSeek,
  onPlay,
  onPrev,
  onNext,
  onFavorite,
}) => {
  const readableTime = (time) =>
    `${Math.trunc(time / 60)}:${("0" + Math.trunc(time % 60)).slice(-2)}`;

  return (
    <div className="flex items-center gap-6 w-full sm:p-5 p-2.5">
      {/* Album cover */}
      <div className="hidden sm:block shrink-0">
        <div
          className="relative w-16 h-16 rounded-lg bg-cover bg-center bg-zinc-900 shadow-lg group/cover cursor-pointer"
          style={{ backgroundImage: `url(${item?.cover})` }}
          onClick={() => item?.id && onPlay(item.id)}
        >
          <div className="absolute inset-0 rounded-lg bg-black/50 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity duration-200">
            {item?.isPlaying ? (
              <BsPauseFill className="text-xl z-10" />
            ) : (
              <BsPlayFill className="text-xl ml-0.5 z-10" />
            )}
          </div>
        </div>
      </div>

      {/* Title + singer */}
      <div className="flex flex-col min-w-0 sm:w-36 w-fit shrink-0">
        <p className=" text-sm font-semibold truncate">{item?.title ?? "—"}</p>
        <p className="text-zinc-500 text-xs mt-0.5 truncate">
          {item?.singer ?? "—"}
        </p>
      </div>

      {/* Controls + scrubber */}
      <div className="flex flex-col items-center gap-2 flex-1 min-w-0">
        {/* Scrubber */}
        <div className="w-full flex items-center gap-3">
          <span className="text-[10px] text-zinc-300 tabular-nums shrink-0">
            {isActive ? readableTime(songTimeLive) : "0:00"}
          </span>
          <div className="relative flex-1 h-1 rounded-full bg-zinc-800">
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
                onChange={onSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            )}
          </div>
          <span className="text-[10px] text-zinc-300 tabular-nums shrink-0">
            {isActive && !isNaN(songTimeFull)
              ? readableTime(songTimeFull)
              : "0:00"}
          </span>
        </div>
        {isActive && (
          <div className="flex items-center gap-5">
            <button
              onClick={onPrev}
              className="text-zinc-500 hover: transition-colors duration-150"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => onPlay(item.id)}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer"
            >
              {item?.isPlaying ? (
                <BsPauseFill className="text-black text-base" />
              ) : (
                <BsPlayFill className="text-black text-base ml-0.5" />
              )}
            </button>
            <button
              onClick={onNext}
              className="text-zinc-500 hover: transition-colors duration-150"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        )}
      </div>

      {/* Favorite */}
      <div className="shrink-0">
        <button
          onClick={() => onFavorite(item?.id)}
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
};

const Header = () => {
  const songData = useSpotifyStore((s) => s.songData);
  const getCurrentSong = useSpotifyStore((s) => s.getCurrentSong);
  const songTrack = useSpotifyStore((s) => s.songTrack);
  const toggleFavorite = useSpotifyStore((s) => s.toggleFavorite);
  const nextSongHandle = useSpotifyStore((s) => s.nextSongHandle);
  const prevSongHandle = useSpotifyStore((s) => s.prevSongHandle);
  const playHandle = useSpotifyStore((s) => s.playHandle);

  const currentSong = getCurrentSong();
  const defaultSong =
    songData.find((item) => item.title === "Style") ?? songData[0];

  const [songTimeLive, setSongTimeLive] = useState(0);
  const [songTimeFull, setSongTimeFull] = useState(0);

  useEffect(() => {
    if (!songTrack) return;
    const interval = setInterval(() => {
      setSongTimeLive(songTrack.currentTime);
      setSongTimeFull(songTrack.duration);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentSong, songTrack]);

  const progressPercent = songTimeFull
    ? (songTimeLive / songTimeFull) * 100
    : 0;

  return (
    <header className="bg-black border-b border-white/[0.06] w-full">
      {currentSong.length ? (
        currentSong.map((item) => (
          <SongDisplay
            key={item.id}
            item={item}
            isActive={true}
            songTimeLive={songTimeLive}
            songTimeFull={songTimeFull}
            progressPercent={progressPercent}
            onSeek={(e) => (songTrack.currentTime = e.target.value)}
            onPlay={playHandle}
            onPrev={prevSongHandle}
            onNext={nextSongHandle}
            onFavorite={toggleFavorite}
          />
        ))
      ) : (
        <SongDisplay
          item={defaultSong}
          isActive={false}
          songTimeLive={0}
          songTimeFull={0}
          progressPercent={0}
          onSeek={() => {}}
          onPlay={() => {}}
          onPrev={() => {}}
          onNext={() => {}}
          onFavorite={toggleFavorite}
        />
      )}
    </header>
  );
};

export default Header;
