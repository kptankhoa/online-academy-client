import { IconButton, Badge } from "@material-ui/core";

import NotificationsIcon from "@material-ui/icons/Notifications";

// import useStyles from "../styles/header.style";

function NotificationButton(params) {
  // const classes = useStyles();
  return (
    <IconButton aria-label="show 17 new notifications" color="inherit">
    <Badge badgeContent={0} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
  )
}

export default NotificationButton;