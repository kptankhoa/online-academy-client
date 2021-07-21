import React from "react";
import NavBar from '../../components/domain/menu/NavBar';
import HomeContent from "../../components/domain/home/homeContent/HomeContent";
import Footer from "../../components/domain/footer/Footer";

const Home = function () {
  return (
    <div className='home-page d-flex flex-column'>
      <NavBar/>
      <HomeContent/>
      <Footer/>
    </div>
  );
};

export default Home;
