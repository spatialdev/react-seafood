import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { toggleLeftDrawer } from '../../redux/actions';

const drawerWidth = 240;

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

  handleClickedItem = (itemId) => {
    this.props.clickedMenuItem(itemId);
  };

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
    const { classes, polygonData, leftDrawerOptions } = this.props;
    const { anchor, open } = leftDrawerOptions;
    const menuItems = this.filterLeftMenuItems(polygonData);

    return (
      <Drawer
        anchor={anchor}
        open={open}
        onClose={()=>{toggleLeftDrawer(false)}}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={()=>{toggleLeftDrawer(false)}}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List>
          {menuItems.map((item) => {
            return (
              <ListItem button key={item.properties.id} onClick={() => this.handleClickedItem(item.properties.id)}>
                <ListItemText primary={item.properties.name}/>
              </ListItem>);
          })}
        </List>
        <Divider/>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  polygonData: PropTypes.object.isRequired,
  leftDrawerOptions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    polygonData: state.polygonData,
    active: state.active,
    leftDrawerOptions: state.leftDrawerOptions
  };
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(LeftDrawer));