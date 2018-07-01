import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {connect} from "react-redux";
import { toggleBottomDrawer } from '../../redux/actions';
import './bottomDrawer.css';


const styles = theme => ({
  sheet: {},
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class BottomSheet extends Component {

  render() {

    const { classes, bottomDrawer } = this.props;
    const { options, data } = bottomDrawer;
    const { open, anchor } = options;

    return (
      <div>
      <SwipeableDrawer className={classes.sheet}
      anchor={anchor}
      open={open}
      onClose={()=> {toggleBottomDrawer(false)}}
      onOpen={() => {toggleBottomDrawer(true)}}
      disableBackdropTransition={true}
      disableSwipeToOpen={true}
    >
      <div className="wrapperText">
        {Object.keys(data).map((k)=>{
          return(<div>{k}: {data[k]}</div>)
        })}
      </div>
    </SwipeableDrawer>
      </div>
    );
  }
}

BottomSheet.propTypes = {
  bottomDrawer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bottomDrawer: state.bottomDrawer,
  };
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(BottomSheet));