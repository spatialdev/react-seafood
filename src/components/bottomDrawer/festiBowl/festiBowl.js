import React, {Component} from 'react';
import './festiBowl.css';
import {Tabs, Tab} from '@material-ui/core';
import {TabContainer} from '../../../helpers';

class FestiBowl extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {

    const {value} = this.state;

    return (
      <div className="festiBowl">

        Welcome, skaters and fans!
        <br/>
        Festi-Bowl is a regional, all-ages skate competition.
        Saturday only. Let’s SHRED!

        <Tabs value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary">
          <Tab label="Saturday - 12pm - 4pm"/>
          <Tab label="Saturday - 5pm - 8pm"/>
        </Tabs>

        {value === 0 && <TabContainer>
          <div className="drawerSubHead"><b>Saturday, July 14, 2018 – Ballard Commons Park</b></div>
          <div className="drawerSubHead">12-3pm: Clinics and Lessons provided by Skate Like a Girl</div>
          Lessons will start on the hour and last approximately 45 minutes<br/>
          Lesson participants should arrive and check in 15 minutes prior to start time<br/>
          Skateboards, helmet and safety pads will be available or you can bring your own<br/>
          On-site registration is available, pre-registration is preferred<br/>
          <div className="drawerSubHead">3pm: Sidewalk Slalom event</div>
          Prizes for fastest time, best style, gnarliest run and best outfit/costume<br/>
          On-site registration is available, pre-registration is preferred (course opens at 1 p.m. for practice)<br/>
          <div className="drawerSubHead">4 p.m.: School of Rock Band performances</div>
        </TabContainer>}

        {value === 1 && <TabContainer>
          <div className="drawerSubHead">5pm: 12-and-under bowl jam</div>
          Skills showcase in non-competitive environment<br/>
          On-site registration is available, pre-registration is preferred<br/>
          <div className="drawerSubHead">6pm: Ladies Division</div>
          All ages and abilities welcome<br/>
          Contest includes prize money<br/>
          On-site registration is available, pre-registration is preferred<br/>
          <div className="drawerSubHead">7pm: Open Contest</div>
          All skaters welcome to compete<br/>
          Cash prizes, gear and swag<br/>
          Best Trick, Longest Grind, Highest Air, Tricks for Cash<br/>
          On-site registration is available, pre-registration is preferred<br/>
          <div className="drawerSubHead">8 p.m.: Closing Band</div>
        </TabContainer>}

        <div className="small">Note: Times are subject to change based on participation</div>
      </div>
    );
  }
}

export default FestiBowl;