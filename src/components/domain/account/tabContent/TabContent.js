import React from 'react';
import {useParams} from "react-router-dom";
import Profile from "../profile/Profile";
import ProfilePicture from "../profilePicture/ProfilePicture";
import MyLearning from "../myLearning/MyLearning";
import Wishlist from "../wishlist/Wishlist";
import Security from "../security/Security";

function TabContent() {
  const {tabId} = useParams();

  function renderTabContent(tabId) {
    switch (tabId) {
      case "profile":
        return <Profile/>;
      case "my-learning":
        return <MyLearning/>;
      case "wishlist":
        return <Wishlist/>;
      case "security":
        return <Security/>;
      case "avatar":
        return <ProfilePicture/>
      default:
        return <div className="text-center">Not found</div>;
    }
  }

  return (
    <div className="">
      {renderTabContent(tabId)}
    </div>
  );
}

export default TabContent;
