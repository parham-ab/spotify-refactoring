import React from "react";
// react-router-dom
import { Route, Routes, Navigate } from "react-router-dom";
// components
import Layout from "./components/Layout";
import SongsList from "./components/songsList";
import Favorites from "./components/Favorites";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
// context
import SpotifyContextProvider from "./contexts/SpotifyContextProvider.jsx";

const App = () => {
  return (
    <SpotifyContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<SongsList />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </SpotifyContextProvider>
  );
};

export default App;
