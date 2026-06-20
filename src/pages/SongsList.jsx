// context
import { useContext } from "react";
import { SpotifyContext } from "../contexts/SpotifyContextProvider";
// hooks
import useTitle from "../hooks/useTitle";
// components
import Song from "./Song";

const SongsList = () => {
  const { songData } = useContext(SpotifyContext);
  // title
  useTitle("React Spotify");

  return (
    <div className="md:col-span-9 sm:col-span-7 col-span-6 overflow-auto">
      {songData?.map((item) => (
        <Song item={item} key={item.id} />
      ))}
    </div>
  );
};
export default SongsList;
