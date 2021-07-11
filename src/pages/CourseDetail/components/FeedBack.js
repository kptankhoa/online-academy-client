import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";

import Rating from "./Rating";


function FeedBack(props){

  const [point, setPoint] = useState(0);

  return (
    <div style ={{padding: 20}}>
      <Typography variant='h5'>Feedback</Typography>
    </div>
  )
}

export default FeedBack;