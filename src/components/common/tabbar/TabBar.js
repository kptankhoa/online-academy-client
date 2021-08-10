import React, {useContext, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import TabItem from "./tabItem/TabItem";

import {authContext} from "provider/authProvider";

function TabBar({className}) {
  const {pathname} = useLocation();
  const [activeTabId, setActiveTabId] = useState(pathname.split("/").slice(-1)[0]);
  const {authState} = useContext(authContext);

  function renderTabItem(tabId, tabName) {
    if (tabId === activeTabId) {
      return <Link to={`/user/${tabId}`}>
        <TabItem id={tabId} className="tab-active" setActiveTab={setActiveTabId}>{tabName}</TabItem>
      </Link>;
    } else {
      return <Link to={`/user/${tabId}`}>
        <TabItem id={tabId} setActiveTab={setActiveTabId}>{tabName}</TabItem>
      </Link>;
    }
  }

  const classes = "d-flex align-items-center " + (className ? className : "");
  return (
    <>
      {authState.userInfo ? (
        <div className={classes}>
          {renderTabItem("profile", "Profile")}
          {renderTabItem("avatar", "Avatar")}
          {authState.userInfo.type === "student" ? (
            <>
              {renderTabItem("my-learning", "My Learning")}
              {renderTabItem("wishlist", "Wishlist")}
            </>
          ) : ""}
          {renderTabItem("security", "Security")}
        </div>
      ) : ""}
    </>
  );
}

export default TabBar;
