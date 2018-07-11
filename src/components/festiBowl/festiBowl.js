import React, {Component} from 'react';
import './festiBowl.css';

class FestiBowl extends Component {

  render() {

    return (
      <div className="festiBowl">
        Welcome, skaters and fans!
        <br/><br/>
        Festi-Bowl is a regional, all-ages skate competition.
        Saturday only. Let’s SHRED!
        <div className="drawerSubHead"><b>Saturday, July 14, 2018 – Ballard Commons Park</b></div>
        <div className="drawerSubHead">12-3pm: Clinics and Lessons provided by Skate Like a Girl</div>
        Lessons will start on the hour and last approximately 45 minutes<br />
        Lesson participants should arrive and check in 15 minutes prior to start time<br />
        Skateboards, helmet and safety pads will be available or you can bring your own<br />
        On-site registration is available, pre-registration is preferred<br />
        <div className="drawerSubHead">3pm: Sidewalk Slalom event</div>
        Prizes for fastest time, best style, gnarliest run and best outfit/costume<br />
        On-site registration is available, pre-registration is preferred (course opens at 1 p.m. for practice)<br />
        <div className="drawerSubHead">4 p.m.: School of Rock Band performances</div>
        <div className="drawerSubHead">5pm: 12-and-under bowl jam</div>
        Skills showcase in non-competitive environment<br />
        On-site registration is available, pre-registration is preferred<br />
        <div className="drawerSubHead">6pm: Ladies Division</div>
        All ages and abilities welcome<br />
        Contest includes prize money<br />
        On-site registration is available, pre-registration is preferred<br />
        <div className="drawerSubHead">7pm: Open Contest</div>
        All skaters welcome to compete<br />
        Cash prizes, gear and swag<br />
        Best Trick, Longest Grind, Highest Air, Tricks for Cash<br />
        On-site registration is available, pre-registration is preferred<br />
        <div className="drawerSubHead">8 p.m.: Closing Band</div>
        <div className="small">Note: Times are subject to change based on participation</div>
      </div>
    );
  }
}

export default FestiBowl;