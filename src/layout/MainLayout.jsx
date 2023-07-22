import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-288px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
