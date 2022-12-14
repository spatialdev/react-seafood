import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@mui/material/styles';
import { Close } from '@mui/icons-material';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {connect, useDispatch, useSelector} from "react-redux";
import {toggleBottomDrawer} from '../../redux/actions';
import './bottomDrawer.scss';
import imgIconArts from '../../images/icons/svg_arts_2019.svg'
import imgIconFoods from '../../images/icons/svg_foods_2019.svg'
import imgIconSponsors from '../../images/icons/svg_sponsors_NP_2019.svg'
import imgIconMisc from '../../images/icons/svg_misc_2019.svg'
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

const styles = (theme) => ({
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

const BottomSheet = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  let imgIconTypeMap = {
    "Food": imgIconFoods,
    "A/C": imgIconArts,
    "Non-Profit": imgIconSponsors,
    "Police": imgIconMisc,
    "Sponsor": imgIconSponsors
  }

  let imgIconNameMap = {
    "Honey Buckets": imgIconRestroom,
    "Seafood Shack": imgIconCrab,
    "SeafoodFest Info": imgIconInfo,
    "Lutefisk Contest": imgIconContest,
    "Token Sales": imgIconTickets,
    "Beer + Cocktail Garden Token Sales": imgIconTickets
  }

  let games = [
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

  const getHeader = (data) => {

    let svgPin = imgIconTypeMap[data.type];
    let svgIcon = imgIconNameMap[data.name];
  
    // If icon exists, render
    if (typeof svgIcon !== "undefined") {
      return (<div className="key-wrapper">
          <div className="svg-icon">
            <img alt="Featured vendor icon" src={svgIcon}/>
          </div>
        </div>
      )
      // If custom pin exists
    } else if (typeof svgPin !== "undefined" && data.name !== "Trident Seafoods Salmon BBQ") {
      return (
        <div className="key-wrapper">
          <div className="key-id">
            {data.id}
          </div>
          <div className="svg-pin">
            <img alt="Vendor icon" src={svgPin}/>
          </div>
        </div>)
      // Show nothing
    }  else if (data.details === "games") {
      return (
        <div className="key-wrapper">
          <div className="svg-games">
          <img alt="Games icon" src={imgIconGames}/>
          </div>
      </div>)
    } else {
      return null;
    }
  }
  
  const getBottomSheetTemplate = (item) => {
  
    if (item.hasOwnProperty("id")) {
  
      switch (item.name) {
        case "Trident Seafoods Salmon BBQ":
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
        case "Ballard Market Kid's Deck":
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

  const {bottomDrawer, map} = state;
  const {options, data} = bottomDrawer;
  const {open, anchor} = options;
  let style = getBottomSheetTemplate(data);
  let header = getHeader(data)

  return (
    <div>
      <SwipeableDrawer classes={{paperAnchorBottom: styles.paperAnchorBottom, modal: styles.modal}}
                        anchor={anchor}
                        open={open}
                        onClose={() => {
                          dispatch(toggleBottomDrawer(false));
                          // Clear highlight filter
                          map.setFilter('vendor pins highlight',
                            ["all",
                              ["==", "id", 0],
                            ]);
                        }}
                        onOpen={() => {
                          dispatch(toggleBottomDrawer(true))
                        }}
                        disableBackdropTransition={true}
                        disableSwipeToOpen={true}
      >
        <div className="wrapperText">
          {header}

          <Close onClick={()=>{dispatch(toggleBottomDrawer(false))}} className={classes.icon}>
            close
          </Close>

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

export default BottomSheet;
