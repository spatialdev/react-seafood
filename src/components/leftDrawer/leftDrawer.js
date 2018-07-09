import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { toggleLeftDrawer, toggleRightDrawer, setTabValue } from '../../redux/actions';
import { drawerWidth } from '../../redux/constants';
import turfCenter from '@turf/center'
import './leftDrawer.css';
import imgFlier from '../../images/logo-flier.png';
import imgIconEntertainment from '../../images/icons/svg_entertainment.svg'
import imgIconArts from '../../images/icons/svg_arts.svg'
import imgIconFoods from '../../images/icons/svg_foods.svg'
import imgIconSponsors from '../../images/icons/svg_sponsors_NP.svg'
import imgIconMisc from '../../images/icons/svg_misc.svg'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class LeftDrawer extends Component {

  zoomToVendor = (vendor) => {
    const { map, width } = this.props;
    const bbox = turfCenter(vendor);

    map.flyTo({
      center: bbox.geometry.coordinates,
      zoom: 19.5
    });

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
        <img className="Flier" src={imgFlier}/>

        {/*  Map Legend */}
        <div className="Legend">
          <div className="legend-title">Map legend:</div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img className="map-pin" src={imgIconEntertainment}/>
            </span>
            <span className="legend-item-text">Entertainment</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img className="map-pin" src={imgIconArts}/></span>
            <span className="legend-item-text">Arts & Crafts</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img className="map-pin" src={imgIconFoods}/></span>
            <span className="legend-item-text">Food</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img className="map-pin" src={imgIconSponsors}/></span>
            <span className="legend-item-text">Sponsors/Non-Profits</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <img className="map-pin" src={imgIconMisc}/></span>
            <span className="legend-item-text">Other</span>
          </div>
          <div className="legend-item-wrapper">
            <span className="legend-box">
              <i className="material-icons games-icon">star</i></span>
            <span className="legend-item-text">Games</span>
          </div>
        </div>

        <Divider/>

        {/*  Must See List */}
        <div className="legend-title sub-section">Don't Miss:</div>
        <List>
          <ListItem className="list-item-wrapper" button onClick={() => {
            {/*  Close the right & left menu */}
            toggleRightDrawer(true);
            toggleLeftDrawer(false);
            setTabValue({index: 1, name: "Food"});
          }}>
            <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary="Food Vendors"/>
          </ListItem>
          {menuItems.map((item, index) => {
            return (
              <div key={item.properties.id}>
                {/* {index === menuItems.length - 1 ? (<Divider/>) : null} */}
                <ListItem className="list-item-wrapper" button onClick={() => this.zoomToVendor(item)}>
                  <ListItemText disableTypography={true} classes={{root: 'list-item-text'}} primary={item.properties.name}/>
              </ListItem>
              </div>);
          })}
          <Divider/>
          {/*  Go to seafoodfest.org */}
          <a className="list-link" href="https://seafoodfest.org/" target="_blank">
            <ListItem className="list-item-wrapper" button>
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