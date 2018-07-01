import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { toggleRightDrawer } from "../../redux/actions";

import './rightDrawer.css';

const styles = theme => ({});

class RightMenu extends Component {

  componentDidUpdate () {}

  componentDidMount() {}

  render() {

    const { rightDrawerOptions } = this.props;
    const { open, anchor } = rightDrawerOptions;

    return (
      <div className="RightMenu">
        <div className="RightMenuButton" color="secondary">
          <Button onClick={() => toggleRightDrawer(!open)} variant="contained">Vendor List</Button>
        </div>
        <SwipeableDrawer
          className="RightMenuDrawer"
          anchor={anchor}
          open={open}
          onClose={() => toggleRightDrawer(false)}
          onOpen={() => toggleRightDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => toggleRightDrawer(false)}
            onKeyDown={() => toggleRightDrawer(false)}
          >
            Really cool list here!
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

}

RightMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    polygonData: state.polygonData,
    active: state.active,
    leftDrawerOptions: state.leftDrawerOptions,
    rightDrawerOptions: state.rightDrawerOptions
  };
}

export default connect(mapStateToProps)(withStyles(styles)(RightMenu));
