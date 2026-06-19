import React, { useContext, useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// icons
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// context
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
  // readable song time function
  const readableTime = (time) => {
    return `${Math.trunc(time / 60)} : ${("0" + Math.trunc(time % 60)).slice(
      -2
    )}`;
  };
  // playing song
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
  // play song
  const playHandle = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isPlaying = !newSongData[songIndex].isPlaying;
    if (newSongData[songIndex].isPlaying) {
      songTrack.current.play();
      setChanged(!changed);
      return;
    } else {
      songTrack.current.pause();
      setChanged(!changed);
    }
  };

  return (
    <header className="header-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {currentSong.length ? (
            currentSong.map((item) => (
              <div className="d-flex align-items-center m-auto" key={item.id}>
                {/* cover */}
                <div className="d-none d-sm-block m-4">
                  <div
                    key={item.id}
                    className="song-cover d-flex align-items-center justify-content-center"
                    style={{ backgroundImage: `url(${item.cover})` }}
                  >
                    <div onClick={() => playHandle(item.id)}>
                      {item.isPlaying ? (
                        <BsPauseFill className="main-status-icon" />
                      ) : (
                        <BsPlayFill className="main-status-icon" />
                      )}
                    </div>
                  </div>
                </div>
                {/* song info */}
                <div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3>{item.title}</h3>
                      <h6>{item.singer}</h6>
                    </div>
                    {/* favorite button */}
                    <div onClick={() => toggleFavorite(item.id)}>
                      {item.isFavorite ? (
                        <MdFavorite className="favorite-toggle" />
                      ) : (
                        <MdOutlineFavoriteBorder className="favorite-toggle" />
                      )}
                    </div>
                  </div>
                  <div className="song-range-time">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="song-time current-time">
                        {readableTime(songTimeLive)}
                      </span>
                      <span className="song-time full-time">
                        {isNaN(songTimeFull)
                          ? "0 : 00"
                          : readableTime(songTimeFull)}
                      </span>
                    </div>
                    <div className="song-tape">
                      <div
                        className="progress"
                        style={{
                          width: `${(songTimeLive / songTimeFull) * 100}%`,
                        }}
                      ></div>
                      <input
                        type="range"
                        step={1}
                        min={0}
                        max={isNaN(songTimeFull) ? 100 : songTimeFull}
                        value={songTimeLive}
                        onChange={(e) =>
                          (songTrack.current.currentTime = e.target.value)
                        }
                        className="w-100"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 header-btn-handler d-flex align-items-center">
                    <div onClick={prevSongHandle}>
                      <FaChevronLeft />
                    </div>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-top">
                          {item.isPlaying ? "Pause" : "Play"}
                        </Tooltip>
                      }
                    >
                      <div onClick={() => playHandle(item.id)}>
                        {item.isPlaying ? (
                          <BsPauseFill
                            style={{ margin: "0 10px", fontSize: "25px" }}
                          />
                        ) : (
                          <BsPlayFill
                            style={{ margin: "0 10px", fontSize: "25px" }}
                          />
                        )}
                      </div>
                    </OverlayTrigger>
                    <div onClick={nextSongHandle}>
                      <FaChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div
              className="d-flex align-items-center m-auto"
              key={defaultSong.id}
            >
              {/* cover */}
              <div className="d-none d-sm-block m-4">
                <div
                  key={defaultSong.id}
                  className="song-cover d-flex align-items-center justify-content-center"
                  style={{ backgroundImage: `url(${defaultSong.cover})` }}
                ></div>
              </div>
              {/* song info */}
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>{defaultSong.title}</h3>
                    <h6>{defaultSong.singer}</h6>
                  </div>
                  {/* favorite button */}
                  <div onClick={() => toggleFavorite(defaultSong.id)}>
                    {defaultSong.isFavorite ? (
                      <MdFavorite className="favorite-toggle" />
                    ) : (
                      <MdOutlineFavoriteBorder className="favorite-toggle" />
                    )}
                  </div>
                </div>
                <div className="song-range-time">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="song-time current-time">0 : 00</span>
                    <span className="song-time full-time">0 : 00</span>
                  </div>
                  <div className="song-tape">
                    <input type="range" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
