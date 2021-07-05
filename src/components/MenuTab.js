import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Link } from '@material-ui/core';

import HeaderBarContext from '../Context/HeaderBarContext';
import ListItem from './ListItem';
import CategoryItemList from './CategoryItemList';

import useStyles from '../styles/header.style';
import { axiosInstance } from '../utils/auth';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const { state, dispatch } = useContext(HeaderBarContext);

  useEffect(() => {
    async function getList() {
      const res = await axiosInstance.get('/categories');
      console.log(res.data);
      dispatch({
        type: 'setCategories',
        payload: {
          categories: res.data,
        },
      });
    }
    getList();
  }, [dispatch, state.categories.length]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function MenuTab(props) {
  const { state, dispatch } = useContext(HeaderBarContext);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    dispatch({
      type: 'setTabValue',
      payload: {
        tabValue: newValue,
      },
    });
  };

  return (
    <div>
      <Grid container className={classes.tabContainer}>
        <Grid item xs={4}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={state.tabValue}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="Web" {...a11yProps(0)} />
            <Tab label="Mobile" {...a11yProps(1)} />
          </Tabs>
        </Grid>

        <Grid item xs={8} className={classes.rootTabs}>
          <TabPanel value={state.tabValue} index={0}  style={{paddingTop: 0, marginTop: 0}}>
            <ListItem  style={{marginTop: 0, paddingTop: 0}}>
              {state.categories.web.map((category, i) => {
                return (
                  <Link href={''} key={i}>
                    {category.categoryName}
                  </Link>
                );
              })}
            </ListItem>
          </TabPanel>
          <TabPanel value={state.tabValue} index={1} style={{paddingTop: 0, marginTop: 0}}>
            <ListItem  style={{marginTop: 0, paddingTop: 0}} >
              {state.categories.mobile.map((category, i) => {
                return (
                  <Link href={''} key={i}>
                    {category.categoryName}
                  </Link>
                );
              })}
            </ListItem>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

export default MenuTab;
