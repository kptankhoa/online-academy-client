import React from "react";
import Menu from '../../components/domain/menu/Menu';
import HomeContent from "../../components/domain/home/homeContent/HomeContent";
import Footer from "../../components/domain/footer/Footer";

const Home = function (props) {
  // const classes = useStyles();

  // const initialState = {
  //   top10New: [],
  //   topOfView: [],
  //   topCategory: [],
  //   trendingCourse: []
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='home-page'>
      <Menu/>
      <HomeContent/>
      <Footer/>
    </div>
  );
};

export default Home;
