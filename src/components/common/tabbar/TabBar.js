import React, {useState} from 'react';
import {Link} from "react-router-dom";
import TabItem from "./tabItem/TabItem";

import "styles/other.style.css";

function TabBar({className}) {
  const [activeTabId, setActiveTabId] = useState(null);

  function renderTabItem(tabId, tabName) {
    if (tabId === activeTabId) {
      return <Link to={`/user/${tabId}`}>
        <TabItem id={tabId} className="active" setActiveTab={setActiveTabId}>{tabName}</TabItem>
      </Link>;
    } else {
      return <Link to={`/user/${tabId}`}>
        <TabItem id={tabId} setActiveTab={setActiveTabId}>{tabName}</TabItem>
      </Link>;
    }
  }

  const classes = "d-flex align-items-center " + (className ? className : "");
  return (
    <div className={classes}>
      {renderTabItem("profile", "Profile")}
      {renderTabItem("my-learning", "My Learning")}
      {renderTabItem("wishlist", "Wishlist")}
      {renderTabItem("security", "Security")}
    </div>
  );
}

export default TabBar;
