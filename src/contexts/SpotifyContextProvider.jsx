import React, { createContext, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// song
import song1 from "../assets/music/taylor-style.mp3";
import song2 from "../assets/music/Ellie-Goulding-Hate-Me.mp3";
import song3 from "../assets/music/lana-ulteraviolet.mp3";
// img
import pic1 from "../assets/img/taylor.jfif";
import pic2 from "../assets/img/ellie.jfif";
import pic3 from "../assets/img/lana.jfif";
// context
export const SpotifyContext = createContext();

const SpotifyContextProvider = ({ children }) => {
  const [songData, setSongData] = useState([
    {
      id: 1,
      title: "Style",
      singer: "Taylor Swift",
      cover: pic1,
      track: song1,
      active: false,
      isFavorite: false,
      isPlaying: false,
    },
    {
      id: 2,
      title: "Hate Me",
      singer: "Ellie Goulding",
      cover: pic2,
      track: song2,
      active: false,
      isFavorite: false,
      isPlaying: false,
    },
    {
      id: 3,
      title: "Ultraviolet",
      singer: "Lana Del Rey",
      cover: pic3,
      track: song3,
      active: false,
      isFavorite: false,
      isPlaying: false,
    },
  ]);
  const [currentSong, setCurrentSong] = useState([]);

  // this state is for update 'isFavorite' immediately & in all components
  const [changed, setChanged] = useState(false);

  const songTrack = useRef();

  // play song
  const playHandle = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData.forEach((item) => {
      item.isPlaying = false;
      item.active = false;
    });
    newSongData[songIndex].active = true;
    newSongData[songIndex].isPlaying = true;
    songTrack.current.src = songData[songIndex].track;
    newSongData[songIndex].isPlaying && songTrack.current.play();
    setSongData(newSongData);
  };
  // add to favorite songs
  const toggleFavorite = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isFavorite = !newSongData[songIndex].isFavorite;
    if (newSongData[songIndex].isFavorite)
      toast.success("Added to favorites!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    if (!newSongData[songIndex].isFavorite) {
      toast.error("Removed from favorites!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setChanged(!changed);
  };
  // next Song Handle
  const nextSongHandle = () => {
    const Index = songData.findIndex((item) => item.id === currentSong[0].id);
    const newSong = [...songData];
    newSong.forEach((item) => {
      item.isPlaying = false;
      item.active = false;
    });
    if (newSong[Index].id === newSong.length) {
      songTrack.current.src = "";
      songTrack.current.src = newSong[0].track;
      songTrack.current.play();
      newSong[0].active = true;
      newSong[0].isPlaying = true;
      setCurrentSong([songData[0]]);
    } else {
      songTrack.current.src = "";
      songTrack.current.src = newSong[Index + 1].track;
      songTrack.current.play();
      newSong[Index + 1].active = true;
      newSong[Index + 1].isPlaying = true;
      setCurrentSong([songData[Index + 1]]);
    }
  };
  // prev Song Handle
  const prevSongHandle = () => {
    const Index = songData.findIndex((item) => item.id === currentSong[0].id);
    const newSong = [...songData];
    newSong.forEach((item) => {
      item.isPlaying = false;
      item.active = false;
    });
    if (newSong[Index].id === 1) {
      songTrack.current.src = "";
      songTrack.current.src = newSong.at(-1).track;
      songTrack.current.play();
      newSong.at(-1).active = true;
      newSong.at(-1).isPlaying = true;
      setCurrentSong([newSong.at(-1)]);
    } else {
      songTrack.current.src = "";
      songTrack.current.src = newSong[Index - 1].track;
      songTrack.current.play();
      newSong[Index - 1].active = true;
      newSong[Index - 1].isPlaying = true;
      setCurrentSong([songData[Index - 1]]);
    }
  };

  return (
    <SpotifyContext.Provider
      value={{
        songData,
        setSongData,
        songTrack,
        playHandle,
        toggleFavorite,
        currentSong,
        setCurrentSong,
        nextSongHandle,
        prevSongHandle,
      }}
    >
      {/* song source */}
      <audio ref={songTrack} onEnded={nextSongHandle}></audio>
      {children}
      <ToastContainer />
    </SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
