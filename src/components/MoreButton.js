import { IconButton } from '@material-ui/core';

import MoreIcon from '@material-ui/icons/MoreVert';
import { useContext } from 'react';

import HeaderBarContext from '../Context/HeaderBarContext';

/**
 *
 * @param {{mobileMenuId}} props
 * @returns
 */
function MoreButton(props) {
  const { mobileMenuId } = props;

  const { dispatch } = useContext(HeaderBarContext);

  function handleMobileMenuOpen(e) {
    dispatch({
      type: 'setMobileMoreAnchorEl',
      payload: {
        mobileMoreAnchorEl: e.currentTarget,
      },
    });
  }

  return (
    <IconButton
      aria-label="show more"
      aria-controls={mobileMenuId}
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <MoreIcon />
    </IconButton>
  );
}
export default MoreButton;
