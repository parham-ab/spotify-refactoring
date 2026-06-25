import useSpotifyStore from "../store/spotifyStore";
import Song from "./Song";

const SongsList = () => {
  const songData = useSpotifyStore((s) => s.songData);

  return (
    <div className="flex flex-col overflow-auto bg-black h-full pr-1 py-4">
      <p className="text-[11px] uppercase tracking-widest text-zinc-300 mb-4 px-2">
        All tracks
      </p>
      {songData?.map((item) => (
        <Song item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SongsList;
