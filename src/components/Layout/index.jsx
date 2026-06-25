import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header className="" />
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default Layout;
