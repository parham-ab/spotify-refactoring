import React, { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "../contexts/SpotifyContextProvider";
// icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { TbMoodCry } from "react-icons/tb";
import useTitle from "../hooks/useTitle";

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
    <div className="col-span-6 sm:col-span-7 md:col-span-9 overflow-auto">
      {favoriteSelections.length ? (
        favoriteSelections.map((item) => (
          <div
            key={item.id}
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
                    ? "song-list-cover sm:block hidden spinner"
                    : "song-list-cover sm:block hidden"
                }
                style={{
                  backgroundImage: `url(${item.cover})`,
                  cursor: "pointer",
                }}
              ></div>
              <div
                className="song-list-info flex items-center flex-col p-2"
                onClick={() => playHandle(item.id)}
              >
                <h4 className="font-bold break-all">{item.title}</h4>
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
