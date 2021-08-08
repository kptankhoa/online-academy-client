import React from 'react';
import NavBar from "../../components/domain/menu/NavBar";
import Footer from "../../components/domain/footer/Footer";
import UserPageContent from "../../components/domain/account/UserPageContent";

function UserPage() {
  return (
    <div className='user-page d-flex flex-column min-vh-100'>
      <NavBar/>
      <UserPageContent/>
      <Footer/>
    </div>
  );
}

export default UserPage;
