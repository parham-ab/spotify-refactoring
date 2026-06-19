import React, { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "../contexts/SpotifyContextProvider";
// icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { TbMoodCry } from "react-icons/tb";
import useTitle from "./hooks/useTitle";

const Favorites = () => {
  const { songData, toggleFavorite, playHandle } = useContext(SpotifyContext);

  const [favoriteSelections, setFavoriteSelections] = useState([]);
  useEffect(() => {
    const filteredFavorites = songData.filter((item) => item.isFavorite);
    setFavoriteSelections(filteredFavorites);
  }, [songData]);
  // title
  useTitle("React Spotify - ❤");

  return (
    <div className="col-6 col-sm-7 col-md-9" style={{ overflow: "auto" }}>
      {favoriteSelections.length ? (
        favoriteSelections.map((item) => (
          <div
            key={item.id}
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
                style={{
                  backgroundImage: `url(${item.cover})`,
                  cursor: "pointer",
                }}
              ></div>
              <div
                className="song-list-info d-flex align-items-center flex-column p-2"
                onClick={() => playHandle(item.id)}
              >
                <h4 className="fw-bold" style={{ wordBreak: "break-all" }}>
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
        ))
      ) : (
        <div className="text-center mt-5">
          <h1>
            Empty <TbMoodCry />
          </h1>
        </div>
      )}
    </div>
  );
};

export default Favorites;
