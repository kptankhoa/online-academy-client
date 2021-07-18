import React from 'react';
import {Route, Switch} from "react-router-dom";

import "styles/text.style.css";
import "styles/pseudo.style.css";
import TabBar from "../../common/tabbar/TabBar";
import TabContent from "./tabContent/TabContent";

function UserPageContent() {

  return (
    <div className='container-fluid text-color-primary flex-grow-1'>
      <div className='row'>
        <div className='col-7 m-auto'>
          <h2 className="font-weight-bold pt-4">Account Information</h2>
          <TabBar className="mt-4"/>
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
