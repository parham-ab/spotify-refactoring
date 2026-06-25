import { useEffect, useRef } from "react";
import useSpotifyStore from "../store/spotifyStore";
import Footer from "../components/Layout/Footer";

const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const { setSongTrack, nextSongHandle } = useSpotifyStore();

  useEffect(() => {
    setSongTrack(audioRef.current);
  }, []);

  return (
    <>
      <audio ref={audioRef} onEnded={nextSongHandle} />
      {children}
      <Footer />
    </>
  );
};

export default AudioProvider;
