import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleLeftDrawer, toggleRightDrawer, toggleBottomDrawer } from '../../redux/actions';
import LeftDrawer from '../leftDrawer/leftDrawer';
import RightDrawer from '../rightDrawer/rightDrawer';
import { drawerWidth } from '../../redux/constants';
import './main.scss'
import imgNavLogo from '../../images/logo-header.svg'

const styles = theme => ({
  toolbar: {
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
    height: '40px',
    cursor: 'pointer'
  }
});

const dispatch = useDispatch()

const resetView = () => {
  dispatch(toggleLeftDrawer(false));
  dispatch(toggleRightDrawer(false));
  dispatch(toggleBottomDrawer(false));
}

const Main = () => {

  useEffect(() =>  {
    console.log(`updated state: ${this.props}`)
  }, []);
  
  const state = useSelector(state => state)
  console.log(state)

  map.flyTo({
    center: [-122.38473415374757, 47.668667600018416],
    zoom: 18
  })

  return (
    <div className={styles.root}>
      <div>
        <AppBar className={styles.toolbar + ` toolbar`}>
          <Toolbar disableGutters={true}>
            <Hidden mdUp>
            <IconButton
              aria-label="open drawer"
              onClick={()=>{dispatch(toggleLeftDrawer(true))}}
              className={classNames(styles.menuButton)}>
              <MenuIcon/>
            </IconButton>
            </Hidden>
            <div className={styles.flex}>
              <img alt="Reset application" onClick={()=>{resetView}} className={styles.navLogo} src={imgNavLogo} />
            </div>
            <Button  onClick={()=>{dispatch(toggleRightDrawer(true))}} id="vendorButton" className="vendorButton">Vendor List</Button>
          </Toolbar>
        </AppBar>
        <LeftDrawer/>
        <RightDrawer className="rightDrawer" id="rightDrawer"/>
      </div>
    </div>
  );
}

export default Main;