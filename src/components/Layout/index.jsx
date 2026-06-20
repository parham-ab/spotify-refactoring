import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header className="lg:col-span-2 md:col-span-3" />
      <div className="flex h-[60vh]">
        <Sidebar />
        <div className="w-full">

        {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
