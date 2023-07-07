import React, {useEffect, Component} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {withStyles} from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {
  toggleRightDrawer, setTabValue, toggleBottomDrawer,
  setBottomDrawerData, selectRightMenuItem
} from "../../redux/actions";
import './rightDrawer.scss';
import turfCenter from "@turf/center";

const styles = {
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72
  },
  drawerPaper: {
    height: '100%'
  }
};

const filters = [
  "All",
  "Food Vendor",
  "Arts/Crafts",
  "Kids Activities",
  "Non-Profit",
  "Government",
  "Sponsor"
]

const RightMenu = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  // Update global state with tab index & selection
  const handleTabChange = (event, value) => {
    setTabValue({index:value, name: filters[value]})
  };

  const handleItemSelection = (vendor) => {

    const { map, width } = state;
    // Get center of point/polygon
    const bbox = turfCenter(vendor);

    // Highlight vendor pin
    highlightVendorPin(vendor);

    // Zoom to vendor center
    map.flyTo({
      center: bbox.geometry.coordinates,
      zoom: 20.5
    });

    // Set bottom drawer data
    setBottomDrawerData(vendor.properties);
    // Open bottom drawer
    toggleBottomDrawer(true);
    // Record action on google analytics
    selectRightMenuItem(vendor.properties.name);

    // If we're in mobile mode, close the left drawer
    if (width === 'xs' || width === 'sm') {
      toggleRightDrawer(false);
    }
  }

  const highlightVendorPin = (vendor) => {

    const { map } = state;

    map.setFilter('vendor pins highlight',
      ["all",
        ["!=", "type", "Amusement"],
        ["!=", "type", "Restroom"],
        ["!=", "type", "Entertainment"],
        ["!=", "type", "Event Support"],
        ["!=", "name", "Beer Garden Token Sales"],
        ["!=", "name", "Salmon BBQ"],
        ["==", "id", vendor.properties.id],
        ["!=", "show_icon", true]
      ]);

    map.setLayoutProperty('vendor pins highlight', 'visibility', 'visible');
  }

    const { rightDrawerOptions, polygonData } = state;
    const { open, anchor, tabs } = rightDrawerOptions;

    let activeItems = polygonData.features.filter((item) => {
      return tabs.index !== 0 ? filters.indexOf(item.properties.type) === tabs.index : (filters.includes(item.properties.type));
    })

  return (
    <div className="RightMenu">
      <SwipeableDrawer
        classes={{
          paper: styles.drawerPaper
        }}
        className="RightMenuDrawer"
        anchor={anchor}
        open={open}
        onClose={() => toggleRightDrawer(false)}
        onOpen={() => toggleRightDrawer(true)}
      >

        <Tabs
          value={tabs.index}
          onChange={handleTabChange}
          indicatorColor="primary"
          classes={{root: styles.tabsRoot}}
          textColor="primary"
          fullwidth="true"
        >
          <Tab classes={{root: styles.tabRoot}} label="All" />
          <Tab classes={{root: styles.tabRoot}} label="Food" />
          <Tab classes={{root: styles.tabRoot}} label={<span>Arts <br/>& Crafts</span>} />
          <Tab classes={{root: styles.tabRoot}} label="Kids Activities" />
        </Tabs>

        <List
          className="ListWrapper"
          role="button"
          onClick={() => toggleRightDrawer(false)}
          onKeyDown={() => toggleRightDrawer(false)}
        >
          {activeItems.map((item) => {
            return (
              <ListItem onClick={() => handleItemSelection(item)} button key={item.properties.id}>
                <ListItemText primary={item.properties.name}/>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </div>
  );
}

export default RightMenu;
