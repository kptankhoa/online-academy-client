import React from 'react';
import {useParams} from "react-router-dom";
import Profile from "../profile/Profile";
import MyLearning from "../myLearning/MyLearning";

function TabContent() {
  const {tabId} = useParams();

  function renderTabContent(tabId) {
    switch (tabId) {
      case "profile":
        return <Profile/>;
      case "my-learning":
        return <MyLearning/>;
      case "wishlist":
        return <div>wishlist</div>;
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
