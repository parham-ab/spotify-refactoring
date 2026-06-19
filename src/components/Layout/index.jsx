// components
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header className="col-lg-2 col-md-3" />
      <div className="d-flex" style={{ height: "60vh" }}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;