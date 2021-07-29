import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import TabItem from "../../common/tabbar/tabItem/TabItem";

const EditCourseTabBar = ({className, url}) => {
  const {pathname} = useLocation();
  const [activeTabId, setActiveTabId] = useState(pathname.split("/").slice(-1)[0]);

  function renderTabItem(tabId, tabName) {
    const itemUrl = `${url}/${tabId}`;
    if (tabId === activeTabId) {
      return <Link to={itemUrl}>
        <TabItem id={tabId} className="active" setActiveTab={setActiveTabId}>{tabName}</TabItem>
      </Link>;
    } else {
      return <Link to={itemUrl}>
        <TabItem id={tabId} setActiveTab={setActiveTabId}>{tabName}</TabItem>
      </Link>;
    }
  }

  const classes = "d-flex align-items-center " + (className ? className : "");
  return (
    <div className={classes}>
      {renderTabItem("basic", "Basic")}
      {renderTabItem("image", "Image")}
      {renderTabItem("video", "Video")}
    </div>
  );
};

export default EditCourseTabBar;
