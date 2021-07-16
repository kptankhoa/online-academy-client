import React from 'react';
import {useParams} from "react-router-dom";
import Profile from "../profile/Profile";

function TabContent() {
  const {tabId} = useParams();

  function renderTabContent(tabId) {
    switch (tabId) {
      case "profile":
        return <Profile/>;
      case "my-learning":
        return <div>my-learning</div>;
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
