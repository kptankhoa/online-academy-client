import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReactPlayer from 'react-player';

import { useStyles } from './Button.style';
import Loading from 'components/Loading';

export default function CustomButton({
  onclick,
  ondone,
  onclicked,
  onloading,
  unclickName,
  clickedName,
  initState,
  failedComponent,
  ...rest
}) {
  const classes = useStyles();

  const [state, setState] = useState(null);

  useEffect(() => {
    setState(initState);
  }, [initState]);

  const done = () => {
    setState('clicked');
    typeof ondone === 'function' && ondone();
  };

  const handleOnclick = () => {
    switch (state) {
      case 'unclick':
        if (typeof onclick === 'function' && onclick(done) === true) {
          onclick(done);
          setState('loading');
        }
        break;

      case 'loading':
        break;

      case 'clicked':
        typeof onclicked === 'function' && onclicked();
        break;

      default:
        break;
    }
  };

  const render =
    state === 'unclick' ? (
      <button onClick={handleOnclick} {...rest}>
        {unclickName}
      </button>
    ) : state === 'loading' ? (
      <Loading size={20} timeoutComponent={failedComponent} />
    ) : (
      <button onClick={handleOnclick} {...rest}>
        {clickedName}
      </button>
    );

  return <div>{render}</div>;
}
