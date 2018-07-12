import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { isBrowser } from 'react-device-detect';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { toggleLeftDrawer, toggleRightDrawer } from '../../redux/actions';
import LeftDrawer from '../leftDrawer/leftDrawer';
import RightDrawer from '../rightDrawer/rightDrawer';
import { drawerWidth } from '../../redux/constants';
import './main.css'
import imgNavLogo from '../../images/logo-header.svg'

const styles = theme => ({
  toolbar: {
    "background-color": '#076293',
    "font-family": `'Open Sans', sans-serif  !important`,
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    [theme.breakpoints.up('md')]: {
      marginLeft: `40px`,
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 5,
    color: "#fff"
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
  navLogo: {
    height: '40px'
}
});

class Main extends Component {

  componentDidUpdate() {
    console.log(`updated state: ${this.props}`)
  }

  render() {
    const { classes, leftDrawerOptions } = this.props;
    const { anchor, open } = leftDrawerOptions;

    return (
      <div className={classes.root}>
        <div>
          <AppBar className={classes.toolbar}>
            <Toolbar disableGutters={true}>
              <Hidden mdUp>
              <IconButton
                aria-label="open drawer"
                onClick={()=>{toggleLeftDrawer(true)}}
                className={classNames(classes.menuButton)}>
                <MenuIcon/>
              </IconButton>
              </Hidden>
              <div className={classes.flex}>
                <img className={classes.navLogo} src={imgNavLogo} />
              </div>
              <Button  onClick={()=>{toggleRightDrawer(true)}} className="vendorButton">Vendor List</Button>
            </Toolbar>
          </AppBar>
          <LeftDrawer/>
          <RightDrawer/>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
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

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Main));