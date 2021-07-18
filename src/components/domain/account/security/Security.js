import React from 'react';

import "styles/other.style.css";
import "styles/text.style.css";
import EmailModalInput from "./emailModalInput/EmailModalInput";
import PasswordModalInput from "./passwordModalInput/PasswordModalInput";

function Security() {
  return (
    <div className="row">
      <div className="col-6">
        <EmailModalInput/>
        <PasswordModalInput/>
      </div>
    </div>
  );
}

export default Security;
