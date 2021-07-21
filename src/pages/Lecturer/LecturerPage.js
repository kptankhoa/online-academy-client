import React from 'react';
import NavBar from "../../components/domain/menu/NavBar";
import LecturerPageContent from "../../components/domain/account/LecturerPageContent";
import Footer from "../../components/domain/footer/Footer";

function LecturerPage() {
  return (
    <div className="lecturer-dashboard d-flex flex-column">
      <NavBar/>
      <LecturerPageContent/>
      <Footer/>
    </div>
  );
}

export default LecturerPage;
