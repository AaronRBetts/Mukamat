
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop: '10px',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  image: {
      width: '100%'
  },
  Card: {
    margin: 'auto',
      padding: '10px',
      maxWidth: '500px'
  },
  labels: {
      '& button': {
          padding: '0',
          minWidth: '0',
      },
      '& span': {
        ["@media (max-width:800px)"]: { fontSize: '0.7rem' },
      }
  }
}));

export default function FullWidthTabs({products}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs className={classes.labels}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Sivutyypit" {...a11yProps(0)} />
          {products[0].audience ? <Tab label="Kenelle" {...a11yProps(1)} />: ''}
          {products[0].teachingGuide ? <Tab label="Oppetajan opas" {...a11yProps(2)} />: ''}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container>
                  {products[0].type.map((product, key) => {
                      return (

                              <Grid item xs={12} className={classes.Card} key={key}>

                                  <Grid className={classes.Card}  dangerouslySetInnerHTML={{__html: product.details}} />
                              {product.extra ? <Grid className={classes.Card}  dangerouslySetInnerHTML={{__html: product.extra}} /> : ''}
                              </Grid>

                      )

                  })}
          </Grid>
        </TabPanel>
        {products[0].audience ? 
        <TabPanel value={value} index={1} dir={theme.direction}>
            <div dangerouslySetInnerHTML={{__html: products[0].audience}} />
        </TabPanel> : ''}
        {products[0].teachingGuide ? 
        <TabPanel value={value} index={2} dir={theme.direction}>
            <div dangerouslySetInnerHTML={{__html: products[0].teachingGuide}} />
        </TabPanel> : ''}
      </SwipeableViews>
    </div>
  );
}