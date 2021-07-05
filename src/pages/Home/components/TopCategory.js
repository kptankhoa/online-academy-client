import { Grid, Container, Typography } from '@material-ui/core';
import { positions } from '@material-ui/system';

import ListItem from '../../../components/ListItem';
import CategoryItemList from '../../../components/CategoryItemList';
import AccordingTitle from '../../../components/AccordingTitle';

import useStyles from '../styles/topCategory';
import { useContext, useEffect } from 'react';
import { axiosInstance } from '../../../utils/auth';

import HomeContext from '../HomeContext';

function TopCategory({ children, ...rest }) {
  const classes = useStyles();

  const { state, dispatch } = useContext(HomeContext);

  useEffect(() => {
    async function getList() {
      const res = await axiosInstance.get('/statistics/featuredCategories');
      dispatch({
        type: 'setTopCategory',
        payload: {
          topCategory: res.data,
        },
      });
    }
    getList();
  }, [dispatch, state.topCategory.length]);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <AccordingTitle className={classes.title}>Top Category</AccordingTitle>
        <ListItem>
          {state.topCategory.map((category, i) => {
            return (
              <CategoryItemList className={classes.item} link={''} key={i}>
                {category.categoryName}
              </CategoryItemList>
            );
          })}
        </ListItem>
      </Container>
    </div>
  );
}

export default TopCategory;
