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
    "SeafoodFest Info"
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
            <div>
              A Festival favorite: Trident Seafoods Alder-smoked salmon, garlic bread, cole slaw, and a choice of water
              or soft drink.
              $12 per person.
              <br/><br/>
              Hours
              <br/>
              <b>11:00am - 7:00pm</b>
              <br/><br/>
              <b>TOKEN PURCHASE:</b> Tokens are available only at the Information Booth: Crab, mussels, bbq oysters and
              Salmon Token Sales Stations located at 22nd Ave NW and NW Market Street (next to Starbucks).
              <br/>We have a limited quantity of these tasty seafood offerings, so buy your tokens early!
              <br/><b>PURCHASE TOKENS FIRST THEN PICK UP SALMON ON THE NORTH SIDE OF MARKET STREET ON 22nd AVE
              NW</b> (In front of Ballard Health Club and Chase Bank)
            </div>)

        // BEER GARDEN
        case "Beer Garden":
          return (
            <div>
              Enjoy local beers and wine in our festival beer garden located near the Gravity and VisitBallard.com MainStage.
              <br/>
              The beer garden is open from 5pm to 10pm on Friday, 12pm to 11pm on Saturday, and 12pm to 9pm on Sunday.
              <br/><br/>
              Beverages offered are crafted by:
              <br/><br/>

              {breweries.map((brewery)=> {
                return (
                  <div key={brewery}>{brewery}</div>
                )
              })}
            </div>
          )

        case "Festi-Bowl":
          return (
            <div>
              Welcome, skaters and fans!
              <br/><br/>
              Festi-Bowl is a regional, all-ages skate competition.
              Saturday only. Let’s SHRED!
              <br/><br/>
              Saturday, July 14, 2018 – Ballard Commons Park
              12-3pm: Clinics and Lessons provided by Skate Like a Girl
              Lessons will start on the hour and last approximately 45 minutes
              Lesson participants should arrive and check in 15 minutes prior to start time
              Skateboards, helmet and safety pads will be available or you can bring your own
              On-site registration is available, pre-registration is preferred
              <br/><br/>
              3pm: Sidewalk Slalom event
              Prizes for fastest time, best style, gnarliest run and best outfit/costume
              On-site registration is available, pre-registration is preferred (course opens at 1 p.m. for practice)
              <br/><br/>
              4 p.m.: School of Rock Band performances
              <br/><br/>
              5pm: 12-and-under bowl jam
              Skills showcase in non-competitive environment
              On-site registration is available, pre-registration is preferred
              <br/><br/>
              6pm: Ladies Division
              All ages and abilities welcome
              Contest includes prize money
              On-site registration is available, pre-registration is preferred
              <br/><br/>
              7pm: Open Contest
              All skaters welcome to compete
              Cash prizes, gear and swag
              Best Trick, Longest Grind, Highest Air, Tricks for Cash
              On-site registration is available, pre-registration is preferred
              <br/><br/>
              8 p.m.: Closing Band
              <br/>
              Note: Times are subject to change based on participation
            </div>
          )

          // TODO material-ui tabs for each day
          // TODO also, should be in <tables/>
        case "Kid's Deck":
          return (
            <div>
              Attention Parents and Kids! Don’t miss the fun in Ballard Commons Park! Check out these free and paid activities to keep little barnacles happy and entertained.
              SATURDAY, JULY 14th

              Ballard Commons Park Water Feature
              The spray park at Ballard Commons Park (weather permitting) Bring the kiddos and cool off at the Park.
              11:00 a.m. - 8:00 p.m.

              Bouncy Houses*
              An assortment of bouncy houses will be available.
              11:00 a.m. - 7:00 p.m.

              Illumination Learning Studios Sponsored Events
              Illumination Learning Studios is hosting a series of events designed to inspire your child’s imagination:

              My ID Club, Balloons, Instruments, Sound Experiment, Art Project, Hula Hoops, Bubbles, Pop a Shots, Sidewalk Chalk Fun, Balloon Artists, Face Painters,

              11:00 a.m. – 8:00 p.m.

              Seattle Public Library-Ballard Branch Activities
              11:00 a.m. – 8:00 p.m.
              Station 18 Fire Truck
              1:00 p.m. – 3:00 p.m.

              Facepainting by Tiny Art Face Painting *
              1:00 p.m. – 3:00 p.m.
              *These events require a fee
              Sunday, JULY 15th

              Ballard Commons Park Water Feature
              The spray park at Ballard Commons Park (weather permitting) Bring the kiddos and cool off at the Park.

              11:00 a.m. - 8:00 p.m.

              Bouncy Houses *
              An assortment of bouncy houses will be available.

              11:00 a.m. - 6:00 p.m.

              Illumination Learning Studios Sponsored Events
              Illumination Learning Studios is hosting a series of events designed to inspire your child’s imagination:

              My ID Club, Balloons, Instruments, Sound Experiment, Art Project, Hula Hoops, Bubbles, Pop a Shots, Sidewalk Chalk Fun, Balloon Artists, Face Painters,

              11:00 a.m. – 8:00 p.m.

              12:00-12:45 P.M.	Johannes Drumming

              1:00-1:45 P.M.	Mr. Ryan’s Pirate Yoga

              2:00-2:45 P.M.	ILS Performers, Break Dance Crew, Choir, and Beckett Piano

              3:00-3:45 P.M.	CSZ Improv with Kids

              4:00-4:45 P.M.	ILS Dance Party



              Seattle Public Library-Ballard Branch Activities
              11:00 a.m. – 8:00 p.m.

              *These events require a fee

            </div>
          )

        //TODO should be a table with a material-ui tab for each date
        case "Main Stage":
        case "Back Stage":
          return (
            <div>
              Wall-to-wall music Friday evening, Saturday and Sunday. What is Seattle without more music?
              Friday July 13th (Beer + Cocktail Garden opens and only Food Trucks available 5 PM-10 PM)
              6:00 – 7:00 p.m.	DJ
              7:00 – 7:30 p.m. 	#All4Doras
              7:45 – 10:00 p.m.	Nite Wave

              Saturday July 14th
              12:00 – 12:40 p.m.	Zumba with Ballard Health Club
              1:00 – 2:00 p.m.	Lanford Black
              2:30 – 3:30 p.m.	Acid Tongue
              4:00 – 5:00 p.m.	Smokey Brights
              5:30 – 6:30 p.m.	The Grizzled Mighty
              7:00 – 8:00 p.m.	All Them Witches
              8:30 – 10:00 p.m.	Blitzen Trapper

              Sunday July 15th
              12:00 – 1:00 p.m.	School of Rock
              1:30 – 2:30 p.m.	Whitney Monge
              3:00 – 4:00 p.m.	Gypsy Temple
              4:30 – 5:30 p.m.	Whiskey Shivers
              6:00 – 7:00 p.m.	Purple Mane
              7:30 – 9:00 p.m.	The Dead South
            </div>
          )

        case "Game Plank":
          return (
            <div>
              Continue down Ballard Avenue, just past the Gravity Payments MainStage, and enjoy our Game Plank on Saturday!
              <br/>
              We’ll have a variety of free and fun games for you to play including Corn Hole, Ladder Ball, Giant Jenga, Chill Out Lounge, Doggie Comfort Station, Aerial performances by The Cabiri – Arcadia, Girl Scout Troop 44477, Page Ahead Children’s Literacy booth, Verity Credit Union Badminton Station, and much more fun for the young at heart!
              HomeStreet Bank will be displaying the HomeStreet Bank Hydroplane replica, “Miss HomeStreet” stop by their booth and say hi. You won’t want to miss it!
              <br/><br/>
              Date:		SATURDAY ONLY from 11:00 a.m. – 6:00 p.m.
              Location: 	Ballard Avenue
            </div>
          )
        case "SeafoodFest Info":
          return (
            <div>
              What's here: general information, festival guides, first aid, and missing child assistance.
              <br/>
              T-shirt and festival swag for purchase. Volunteers are standing by to help with all of your festival questions!
            </div>
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