import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Content changes dynamically here */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
