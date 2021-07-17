import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import jwt_decode from "jwt-decode";
import {academyAxios} from "../../../../config/axios.config";

import "styles/other.style.css";
import "styles/text.style.css";
import EmailModalInput from "./emailModalInput/EmailModalInput";
import PasswordModalInput from "./passwordModalInput/PasswordModalInput";

function Security() {
  const [user, setUser] = useState({});
  const decoded = jwt_decode(localStorage.getItem(process.env.REACT_APP_STORAGE_ACCESS_TOKEN));

  useEffect(() => {
    academyAxios.get(`/users/${decoded.userId}`).then(response => {
      if (response.status === 200) {
        setUser(response.data);
      }
    });
  }, [decoded.userId]);

  return (
    <>
      {Object.keys(user).length === 0 ? (
        <div className="spinner-wrapper">
          <div className="spinner-grow spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-6">
            <EmailModalInput defaultValue={user.email} userId={user._id}/>
            <PasswordModalInput userId={user._id}/>
          </div>
        </div>
      )}
    </>
  );
}

export default Security;
