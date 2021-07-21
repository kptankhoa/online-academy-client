import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StudentManagement from '../StudentManagement/StudentManagement';
import { Person } from '@material-ui/icons';
import CategoryIcon from '@material-ui/icons/Category';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TabPanel from './TapPanel';
import { LecturerManagement } from '..';
import CategoryManagement from '../CategoryManagement/CategoryManagement';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function TabOptions() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label={
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                textTransform: 'none',
                alignSelf: 'flex-start',
              }}
            >
              <Person />
              Students
            </div>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                textTransform: 'none',
                alignSelf: 'flex-start',
              }}
            >
              <Person />
              Lecturers
            </div>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                textTransform: 'none',
                alignSelf: 'flex-start',
              }}
            >
              <CategoryIcon />
              Categories
            </div>
          }
          {...a11yProps(2)}
        />
        <Tab
          label={
            <div
              style={{
                fontWeight: 'bold',
                display: 'flex',
                alignSelf: 'flex-start',
                textTransform: 'none',
              }}
            >
              <MenuBookIcon />
              Courses
            </div>
          }
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <StudentManagement />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LecturerManagement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CategoryManagement />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
