import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AudioProvider from "./providers/AudioProvider.jsx";
import routes from "./routes/index.jsx";
import Layout from "./components/Layout";

const App = () => {
  // main.jsx or App.jsx
  useEffect(() => {
    const handler = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return (
    <AudioProvider>
      <Layout>
        <Routes>
          {routes?.map((item) => {
            const Component = item?.component;
            return (
              <Route
                key={item?.path}
                path={item?.path}
                element={<Component />}
              />
            );
          })}
          <Route path="/*" element={<Navigate to="/songs" />} />
        </Routes>
      </Layout>
      <Toaster position="top-center" reverseOrder={false} />
    </AudioProvider>
  );
};

export default App;
