// // context
// import { useContext } from "react";
// import { SpotifyContext } from "../contexts/SpotifyContextProvider";
// // hooks
// import useTitle from "../hooks/useTitle";
// // components
// import Song from "./Song";

// const SongsList = () => {
//   const { songData } = useContext(SpotifyContext);
//   // title
//   useTitle("React Spotify");

//   return (
//     <div className="md:col-span-9 sm:col-span-7 col-span-6 overflow-auto">
//       {songData?.map((item) => (
//         <Song item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };
// export default SongsList;

// SongsList.jsx
import { useContext } from "react";
import { SpotifyContext } from "../contexts/SpotifyContextProvider";
import useTitle from "../hooks/useTitle";
import Song from "./Song";

const SongsList = () => {
  const { songData } = useContext(SpotifyContext);
  useTitle("React Spotify");

  return (
    <div className="flex flex-col overflow-auto bg-black h-full px-3 py-4">
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
