import React, { useEffect, Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  toggleLeftDrawer, toggleRightDrawer, setTabValue, selectLeftMenuItem,
  toggleBottomDrawer, setBottomDrawerData
} from '../../redux/actions';
import { drawerWidth } from '../../redux/constants';
import turfCenter from '@turf/center'
import './leftDrawer.scss';
import imgFlier from '../../images/logo-flier.png';
import imgIconEntertainment from '../../images/icons/svg_entertainment_2019.svg'
import imgIconArts from '../../images/icons/svg_arts_2019.svg'
import imgIconFoods from '../../images/icons/svg_foods_2019.svg'
import imgIconSponsors from '../../images/icons/svg_sponsors_NP_2019.svg'
import imgIconMisc from '../../images/icons/svg_misc_2019.svg'
import imgKidsActivities from '../../images/icons/svg_kids_2022.svg';


const LeftDrawer = () => {

  const theme = useTheme()
  
  const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    drawerPaper: {
      width: drawerWidth,
      height: '100%',
    },
    list: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: '10px'
      }
    }
  });

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  useEffect(() => {
    console.log(`updated state: ${state}`)
  }, [])

  const handleItemSelection = (vendor) => {
    const { map } = state;
    // Get polygon/point center
    const bbox = turfCenter(vendor);

    // Zoom to center
    map.flyTo({
      center: bbox.geometry.coordinates,
      zoom: 18.5
    });

    // Set bottom drawer data
    setBottomDrawerData(vendor.properties);
    // Open bottom drawer
    toggleBottomDrawer(true);
    // Record selection on google analytics
    selectLeftMenuItem(vendor.properties.name);

    // If we're in mobile mode, close the left drawer
    if (useMediaQuery(theme.breakpoints.down("sm"))) {
      toggleLeftDrawer(false);
    }
  }

  const filterLeftMenuItems = (data) => {
    let leftPanelData = [];
    const items = data.features;
    items.forEach((vendor) => {
      if (vendor.properties.left_panel) {
        leftPanelData.push(vendor);
      }
    });
    return leftPanelData;
  };



  const { polygonData, leftDrawerOptions } = state;
  const { anchor, open } = leftDrawerOptions;
  const menuItems = filterLeftMenuItems(polygonData);
  // On large screens, make the left drawer permanently open

  const drawerVariant = useMediaQuery(theme.breakpoints.up("sm")) ? 'permanent' : 'temporary';

    return (
      <ThemeProvider theme={theme}>
      <SwipeableDrawer
        variant={drawerVariant}
        anchor={anchor}
        open={open}
        onClose={()=>{toggleLeftDrawer(false)}}
        onOpen={()=>{toggleLeftDrawer(true)}}
        classes={{paper: styles(theme).drawerPaper}}
      >
        {/* Drawer Flier Image */}
        <img alt="Official Seafood Fest Flier" className="Flier" src={imgFlier}/>

        {/*  Map Legend */}
        <div className="Legend">
          <div className="legend-title">Map legend:</div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Entertainment" className="map-pin" src={imgIconEntertainment}/>
            </span>
            <span className="legend-item-text">Entertainment</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Arts & Crafts" className="map-pin" src={imgIconArts}/></span>
            <span className="legend-item-text">Arts & Crafts</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Food" className="map-pin" src={imgIconFoods}/></span>
            <span className="legend-item-text">Food</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Sponsors" className="map-pin" src={imgIconSponsors}/></span>
            <span className="legend-item-text">Sponsors/Non-Profits</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Kids Activities" className="map-pin" src={imgKidsActivities} /></span>
            <span className="legend-item-text">Kids Activities</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Miscellaneous" className="map-pin" src={imgIconMisc}/></span>
            <span className="legend-item-text">Other</span>
          </div>
        </div>

        <Divider/>

        {/*  Must See List */}
        <div className="legend-title sub-section">Don't Miss:</div>
        <List>
          <ListItem className="list-item-wrapper" button onClick={() => {
            // Close the right & left menu
            toggleRightDrawer(true);
            toggleLeftDrawer(false);
            setTabValue({index: 1, name: "Food"});
            selectLeftMenuItem("Food Vendors");
          }}>
            <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Food Vendors"/>
          </ListItem>
          <ListItem className="list-item-wrapper" button onClick={() => {
            // Close the right & left menu
            toggleRightDrawer(true);
            toggleLeftDrawer(false);
            setTabValue({index: 2, name: "Arts/Crafts"});
            selectLeftMenuItem("Arts/Crafts");
          }}>
            <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Arts & Crafts Vendors"/>
          </ListItem>
          <ListItem className="list-item-wrapper" button onClick={() => {
            // Close the right & left menu
            toggleRightDrawer(true);
            toggleLeftDrawer(false);
            setTabValue({index: 3, name: "Kids Activities"});
            selectLeftMenuItem("Kids Activities");
          }}>
            <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Kids Activities"/>
          </ListItem>
          {menuItems.map((item, index) => {
            return (
              <div key={item.properties.id}>
                {/* {index === menuItems.length - 1 ? (<Divider/>) : null} */}
                <ListItem className="list-item-wrapper" button onClick={() => handleItemSelection(item)}>
                  <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary={item.properties.name}/>
              </ListItem>
              </div>);
          })}
          <Divider/>
          {/*  Go to seafoodfest.org */}
          <a className="list-link" href="https://seafoodfest.org/" target="_blank" rel="noopener noreferrer">
            <ListItem classes={{root: styles(theme).list }} className="list-item-wrapper" button>
              <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Seafood Fest Org"/>
            </ListItem>
          </a>
        </List>
      </SwipeableDrawer>
      </ThemeProvider>
    );
  }

export default LeftDrawer;
