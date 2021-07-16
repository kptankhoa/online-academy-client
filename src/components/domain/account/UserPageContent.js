import React from 'react';
import {Link, Route, Switch} from "react-router-dom";

import "../../../styles/text.style.css";
import "../../../styles/pseudo.style.css";
import TabBar from "../../common/tabbar/TabBar";
import TabItem from "../../common/tabbar/tabItem/TabItem";
import TabContent from "./tabContent/TabContent";

function UserPageContent() {
  // const {tabId} = useParams();

  return (
    <div className='container-fluid text-color-primary'>
      <div className='row'>
        <div className='col-7 m-auto'>
          <h2 className="font-weight-bold pt-4">Account Information</h2>
          <TabBar className="mt-4">
            <Link to="/user/profile">
              <TabItem id="profile">Profile</TabItem>
            </Link>
            <Link to="/user/my-learning">
              <TabItem id="my-learning">My Learning</TabItem>
            </Link>
            <Link to="/user/wishlist">
              <TabItem id="wishlist">Wishlist</TabItem>
            </Link>
          </TabBar>

          <div className="mt-5">
            <Switch>
              <Route exact path="/user/:tabId">
                <TabContent/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPageContent;
