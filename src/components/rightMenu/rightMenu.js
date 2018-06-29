import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { toggleRightMenu } from "../../redux/actions";

import './rightMenu.css';

const styles = theme => ({});

class RightMenu extends Component {

  componentDidUpdate () {}

  componentDidMount() {}

  render() {

    const { rightMenuOptions } = this.props;
    const { open, anchor } = rightMenuOptions;

    return (
      <div className="RightMenu">
        <div className="RightMenuButton" color="secondary">
          <Button onClick={() => toggleRightMenu(!open)} variant="contained">Vendor List</Button>
        </div>
        <SwipeableDrawer
          className="RightMenuDrawer"
          anchor={anchor}
          open={open}
          onClose={() => toggleRightMenu(false)}
          onOpen={() => toggleRightMenu(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => toggleRightMenu(false)}
            onKeyDown={() => toggleRightMenu(false)}
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
    leftMenuOptions: state.leftMenuOptions,
    rightMenuOptions: state.rightMenuOptions
  };
}

export default connect(mapStateToProps)(withStyles(styles)(RightMenu));
