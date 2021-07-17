import React from "react";
import NavBar from "../../components/domain/menu/NavBar";
import Footer from "../../components/domain/footer/Footer";
import ListPageContent from "../../components/domain/listPage/ListPageContent";

export default function List() {
  return (
    <div className='d-flex flex-column'>
      <NavBar/>
      <ListPageContent/>
      <Footer/>
    </div>
  );
}
