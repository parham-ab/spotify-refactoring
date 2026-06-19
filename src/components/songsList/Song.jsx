import { useContext } from "react";
// context
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";
// icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Song = ({ item }) => {
  const { playHandle, toggleFavorite } = useContext(SpotifyContext);

  return (
    <div
      className={
        item.active
          ? "songLists d-flex align-items-center justify-content-between p-3 m-3 active-item"
          : "songLists d-flex align-items-center justify-content-between p-3 m-3"
      }
    >
      <div className="d-flex align-items-center">
        <div
          onClick={() => playHandle(item.id)}
          className={
            item.active
              ? "song-list-cover d-sm-block d-none spinner"
              : "song-list-cover d-sm-block d-none"
          }
          style={{ backgroundImage: `url(${item.cover})`, cursor: "pointer" }}
        ></div>
        <div className="song-list-info d-flex align-items-center flex-column p-2">
          <h4
            className="fw-bold"
            style={{ wordBreak: "break-all" }}
            onClick={() => playHandle(item.id)}
          >
            {item.title}
          </h4>
          <p className="text-success" style={{ wordBreak: "break-all" }}>
            {item.singer}
          </p>
        </div>
      </div>

      <div
        className="song-list-options d-none d-sm-block"
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