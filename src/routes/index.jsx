import SongsList from "../pages/SongsList";
import Favorites from "../pages/Favorites";
import ContactUs from "../pages/contact-us";

const routes = [
  { path: "/songs", component: SongsList },
  { path: "/contact-us", component: ContactUs },
  { path: "/favorites", component: Favorites },
];
export default routes;
