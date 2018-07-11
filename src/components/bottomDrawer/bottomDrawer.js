import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {connect} from "react-redux";
import {toggleBottomDrawer} from '../../redux/actions';
import { breweries } from "../../redux/constants";
import './bottomDrawer.css';
import imgIconEntertainment from '../../images/icons/svg_entertainment.svg'
import imgIconArts from '../../images/icons/svg_arts.svg'
import imgIconFoods from '../../images/icons/svg_foods.svg'
import imgIconSponsors from '../../images/icons/svg_sponsors_NP.svg'
import imgIconMisc from '../../images/icons/svg_misc.svg'
import BeerGarden from '../beerGarden/beerGarden';
import SmokedSalmon from '../smokedSalmon/smokedSalmon';
import Stage from '../stage/stage';
import FestiBowl from '../festiBowl/festiBowl';
import GamePlank from '../gamePlank/gamePlank';
import FestivalInfo from '../festivalInfo/festivalInfo';
import KidsDeck from '../kidsDeck/kidsDeck';
import PurpleSlide from '../purpleSlide/purpleSlide';
import CrabShack from '../crabShack/crabShack';
import Lutefisk from '../lutefisk/lutefisk';

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

  imgIconMap = {
    "All": imgIconEntertainment,
    "Food": imgIconFoods,
    "A/C": imgIconArts,
    "Amusement": imgIconEntertainment,
    "Entertainment": imgIconEntertainment,
    "Non-Profit": imgIconMisc,
    "Police": imgIconMisc,
    "Restroom": imgIconMisc,
    "Sponsor": imgIconSponsors
  }

  customInfo = [
    "Beer Garden",
    "Trident Seafoods Alder-smoked Salmon",
    "Main Stage",
    "Festi-Bowl",
    "Back Stage",
    "Game Plank",
    "SeafoodFest Info",
    "Big Purple Slide",
    "Crab Shack / Shellshole",
    "Lutefisk Contest"
  ]

  render() {

    const {classes, bottomDrawer} = this.props;
    const {options, data} = bottomDrawer;
    const {open, anchor} = options;

    let style = this.getBottomSheetTemplate(data);
    let image = this.imgIconMap[data.type];

    return (
      <div>
        <SwipeableDrawer className={classes.sheet}
                         anchor={anchor}
                         open={open}
                         onClose={() => {
                           toggleBottomDrawer(false)
                         }}
                         onOpen={() => {
                           toggleBottomDrawer(true)
                         }}
                         disableBackdropTransition={true}
                         disableSwipeToOpen={true}
        >
          <div className="wrapperText">
            {this.customInfo.indexOf(data.name) === -1 ? (
              <div className="key-wrapper">
              <div className="key-id">
                {data.id}
              </div>
              <div className="svg-icon">
                <img src={image}/>
              </div>
            </div>) : null}

            <div className="content-wrapper">
              <div className="title">{data.name}</div>
              <div className="category">{data.type}</div>
              {style}
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  getBottomSheetTemplate = (item) => {


    if (item.hasOwnProperty("id")) {

      switch (item.name) {
        // TODO each of these should be its own <Component/>
        // ALDER SMOKED SALMON
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

          // TODO material-ui tabs for each day
          // TODO also, should be in <tables/>
        case "Kid's Deck":
          return (
            <KidsDeck />
          )

        case "Main Stage":
        case "Back Stage":
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
}

BottomSheet.propTypes = {
  bottomDrawer: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    bottomDrawer: state.bottomDrawer,
  };
}

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(BottomSheet));