import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {connect} from "react-redux";
import {toggleBottomDrawer} from '../../redux/actions';
import './bottomDrawer.css';
import imgIconArts from '../../images/icons/svg_arts.svg'
import imgIconFoods from '../../images/icons/svg_foods.svg'
import imgIconSponsors from '../../images/icons/svg_sponsors_NP.svg'
import imgIconMisc from '../../images/icons/svg_misc.svg'
import imgIconRestroom from '../../images/icons/svg_WB.svg'
import imgIconCrab from '../../images/icons/svg_crab.svg'
import imgIconInfo from '../../images/icons/svg_info.svg'
import imgIconContest from '../../images/icons/svg_contestEating.svg'
import imgIconTickets from '../../images/icons/svg_tickets.svg'
import imgIconGames from '../../images/icons/mb_star-15.svg';

import BeerGarden from './beerGarden/beerGarden';
import SmokedSalmon from './smokedSalmon/smokedSalmon';
import Stage from './stage/stage';
import FestiBowl from './festiBowl/festiBowl';
import GamePlank from './gamePlank/gamePlank';
import FestivalInfo from './festivalInfo/festivalInfo';
import KidsDeck from './kidsDeck/kidsDeck';
import PurpleSlide from './purpleSlide/purpleSlide';
import CrabShack from './crabShack/crabShack';
import Lutefisk from './lutefisk/lutefisk';

const styles = theme => ({
  sheet: {},
  list: {
    width: 250,
  },
  paperAnchorBottom: {
    'max-height': '85vh'
  },
  fullList: {
    width: 'auto',
  },
  modal: {
    position: 'unset'
  },
  icon: {
    position: 'fixed',
    right: '15px',
    cursor: 'pointer',
    color: '#333'
  }
});

class BottomSheet extends Component {

  imgIconTypeMap = {
    "Food": imgIconFoods,
    "A/C": imgIconArts,
    "Non-Profit": imgIconSponsors,
    "Police": imgIconMisc,
    "Sponsor": imgIconSponsors
  }

  imgIconNameMap = {
    "Honey Buckets": imgIconRestroom,
    "Seafood Shack": imgIconCrab,
    "SeafoodFest Info": imgIconInfo,
    "Lutefisk Contest": imgIconContest,
    "Token sales": imgIconTickets,
  }

  games = [
    "Fix Enterprises Rock Wall",
    "Cornhole Station #1",
    "Ladder Ball Station",
    "Verity Badminton Station",
    "Giant Jenga",
    "Clover Toys Bubble Station",
    "Arcadia Aerial Performance",
    "AstroTurf Lounge",
    "Bucket Ball Game Station",
    "Cornhole Station #2",
    "Doggie Splash Town Pool",
    "Amusement on Demand Bounce Houses",
    "Tiny Art Face Painting",
    "Parachute",
    "Illumination Learning Studio"
  ]

  render() {

    const {classes, bottomDrawer, map} = this.props;
    const {options, data} = bottomDrawer;
    const {open, anchor} = options;
    let style = this.getBottomSheetTemplate(data);
    let header = this.getHeader(data)

    return (
      <div>
        <SwipeableDrawer classes={{paperAnchorBottom: classes.paperAnchorBottom, modal: classes.modal}}
                         anchor={anchor}
                         open={open}
                         onClose={() => {
                           toggleBottomDrawer(false);
                           // Clear highlight filter
                           map.setFilter('vendor pins highlight',
                             ["all",
                               ["==", "id", 0],
                             ]);
                         }}
                         onOpen={() => {
                           toggleBottomDrawer(true)
                         }}
                         disableBackdropTransition={true}
                         disableSwipeToOpen={true}
        >
          <div className="wrapperText">
            {header}

            <Icon onClick={()=>{toggleBottomDrawer(false)}} className={classes.icon}>
              close
            </Icon>

            <div className="content-wrapper">
              <div className="title">{data.name}</div>
              <div className="category">{data.type}</div>
              <div className="custom-content-wrapper">
                {style}
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  getBottomSheetTemplate = (item) => {

    if (item.hasOwnProperty("id")) {

      switch (item.name) {
        case "Trident Seafoods Alder-smoked Salmon":
          return (
            <SmokedSalmon />
          );

        // BEER GARDEN
        case "Beer Garden":
          return (
            <BeerGarden />
          )

        case "Festi-Bowl":
          return (
            <FestiBowl />
          )
        case "Kid's Deck":
          return (
            <KidsDeck />
          )

        case "Main Stage":
        case "Back Stage":
        case "Gravity Payments Main Stage":
          return (
            <Stage />
          )

        case "Game Plank":
          return (
            <GamePlank />
          )
        case "SeafoodFest Info":
          return (
            <FestivalInfo />
          )
        case "Big Purple Slide":
          return (
            <PurpleSlide />
          )
        case "Crab Shack / Shellshole":
        case "Seafood Shack":
          return (
            <CrabShack />
          )
        case "Lutefisk Contest":
          return (
            <Lutefisk />
          )
        default:
          return null;

      }
    }

  }

  getHeader (data) {

    let svgPin = this.imgIconTypeMap[data.type];
    let svgIcon = this.imgIconNameMap[data.name];

    // If icon exists, render
    if (typeof svgIcon !== "undefined") {
      return (<div className="key-wrapper">
          <div className="svg-icon">
            <img src={svgIcon}/>
          </div>
        </div>
      )
      // If custom pin exists
    } else if (typeof svgPin !== "undefined" && data.name !== "Trident Seafoods Alder-smoked Salmon") {
      return (
        <div className="key-wrapper">
          <div className="key-id">
            {data.id}
          </div>
          <div className="svg-pin">
            <img src={svgPin}/>
          </div>
        </div>)
      // Show nothing
    }  else if (data.details === "games") {
      return (
        <div className="key-wrapper">
          <div className="svg-games">
          <img src={imgIconGames}/>
          </div>
      </div>)
    } else {
      return null;
    }
  }
}

BottomSheet.propTypes = {
  bottomDrawer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bottomDrawer: state.bottomDrawer,
    map: state.map
  };
}

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(BottomSheet));