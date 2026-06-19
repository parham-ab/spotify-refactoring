import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes/index.jsx";
import Layout from "./components/Layout";
import SpotifyContextProvider from "./contexts/SpotifyContextProvider.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <SpotifyContextProvider>
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
    </SpotifyContextProvider>
  );
};

export default App;
