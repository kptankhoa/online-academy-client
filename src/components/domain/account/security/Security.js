import React, {useState} from 'react';

import EmailModalInput from "./emailModalInput/EmailModalInput";
import PasswordModalInput from "./passwordModalInput/PasswordModalInput";

function Security() {
  const [errorMessage, setErrorMessage] = useState("");

  function handleError(errorMessage) {
    setErrorMessage(errorMessage);
  }

  return (
    <div className="row">
      <div className="col-6">
        {errorMessage && (
          <div className="alert alert-danger d-flex align-items-center mb-2" role="alert">
            <i className="fas fa-exclamation-circle" style={{fontSize: 20}}/>&nbsp;&nbsp;
            <div>{errorMessage}</div>
          </div>
        )}
        <EmailModalInput handleError={handleError}/>
        <PasswordModalInput handleError={handleError}/>
      </div>
    </div>
  );
}

export default Security;
