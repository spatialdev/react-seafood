import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  toggleLeftDrawer, toggleRightDrawer, setTabValue, selectLeftMenuItem,
  toggleBottomDrawer, setBottomDrawerData
} from '../../redux/actions';
import { drawerWidth } from '../../redux/constants';
import turfCenter from '@turf/center'
import './leftDrawer.scss';
import imgFlier from '../../images/logo-flier.png';
import imgIconEntertainment from '../../images/icons/svg_entertainment.svg'
import imgIconArts from '../../images/icons/svg_arts.svg'
import imgIconFoods from '../../images/icons/svg_foods.svg'
import imgIconSponsors from '../../images/icons/svg_sponsors_NP.svg'
import imgIconMisc from '../../images/icons/svg_misc.svg'
import imgIconGames from '../../images/icons/mb_star-15.svg';


const styles = theme => ({
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

class LeftDrawer extends Component {

  handleItemSelection = (vendor) => {
    const { map, width } = this.props;
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
    if (width === 'xs' || width === 'sm') {
      toggleLeftDrawer(false);
    }

  }

  filterLeftMenuItems = (data) => {
    let leftPanelData = [];
    const items = data.features;
    items.forEach((vendor) => {
      if (vendor.properties.left_panel) {
        leftPanelData.push(vendor);
      }
    });
    return leftPanelData;
  };

  componentDidUpdate() {
    console.log(`updated state: ${this.props}`)
  }

  render() {
    const { classes, polygonData, leftDrawerOptions, width } = this.props;
    const { anchor, open } = leftDrawerOptions;
    const menuItems = this.filterLeftMenuItems(polygonData);
    // On large screens, make the left drawer permanently open
    const drawerVariant = (width === 'md' || width === 'lg' || width === 'xl') ? 'permanent' : 'temporary';

    return (
      <SwipeableDrawer
        variant={drawerVariant}
        anchor={anchor}
        open={open}
        onClose={()=>{toggleLeftDrawer(false)}}
        onOpen={()=>{toggleLeftDrawer(true)}}
        classes={{
          paper: classes.drawerPaper
        }}
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
              <img alt="Miscellaneous" className="map-pin" src={imgIconMisc}/></span>
            <span className="legend-item-text">Other</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img alt="Games" className="map-pin games-icon" src={imgIconGames} /></span>
            <span className="legend-item-text">Games</span>
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
            setTabValue({index: 2, name: "A/C"});
            selectLeftMenuItem("A/C");
          }}>
            <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Arts and Crafts"/>
          </ListItem>
          {menuItems.map((item, index) => {
            return (
              <div key={item.properties.id}>
                {/* {index === menuItems.length - 1 ? (<Divider/>) : null} */}
                <ListItem className="list-item-wrapper" button onClick={() => this.handleItemSelection(item)}>
                  <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary={item.properties.name}/>
              </ListItem>
              </div>);
          })}
          <Divider/>
          {/*  Go to seafoodfest.org */}
          <a className="list-link" href="https://seafoodfest.org/" target="_blank" rel="noopener noreferrer">
            <ListItem classes={{root: classes.list }} className="list-item-wrapper" button>
              <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Seafood Fest Org"/>
            </ListItem>
          </a>
        </List>
      </SwipeableDrawer>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  polygonData: PropTypes.object.isRequired,
  leftDrawerOptions: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    polygonData: state.polygonData,
    active: state.active,
    leftDrawerOptions: state.leftDrawerOptions,
    map: state.map
  };
}

export default connect(mapStateToProps)(withWidth()(withStyles(styles, { withTheme: true })(LeftDrawer)));