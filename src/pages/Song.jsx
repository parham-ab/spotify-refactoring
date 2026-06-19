import { useContext } from "react";
// context
import { SpotifyContext } from "../contexts/SpotifyContextProvider";
// icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Song = ({ item }) => {
  const { playHandle, toggleFavorite } = useContext(SpotifyContext);

  return (
    <div
      className={
        item.active
          ? "songLists flex items-center justify-between p-3 m-3 active-item"
          : "songLists flex items-center justify-between p-3 m-3"
      }
    >
      <div className="flex items-center">
        <div
          onClick={() => playHandle(item.id)}
          className={
            item.active
              ? "song-list-cover sm:block hidden cursor-pointer spinner"
              : "song-list-cover sm:block hidden cursor-pointer"
          }
          style={{ backgroundImage: `url(${item.cover})` }}
        ></div>
        <div className="song-list-info flex items-center flex-col p-2">
          <h4
            className="font-bold"
            style={{ wordBreak: "break-all" }}
            onClick={() => playHandle(item.id)}
          >
            {item.title}
          </h4>
          <p className="text-success break-all">{item.singer}</p>
        </div>
      </div>

      <div
        className="song-list-options hidden sm:block"
        onClick={() => toggleFavorite(item.id)}
      >
        {item.isFavorite ? (
          <MdFavorite style={{ color: "#df5a5a" }} />
        ) : (
          <MdOutlineFavoriteBorder style={{ color: "#df5a5a" }} />
        )}
      </div>
    </div>
  );
};

export default Song;
