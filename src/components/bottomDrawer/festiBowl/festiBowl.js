import React, {Component} from 'react';
import './festiBowl.scss';
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
      null

      /* Leaving bottom drawer details out in 2022 app
      
      <div className="festiBowl">

        Welcome to Festi-Bowl, Ballard’s celebration of all things Skateboard.
        <br/>
        Festi-Bowl is a free, all-ages all-ability skateboard event that takes place during the Ballard SeafoodFest.
        <b> Saturday, July 13 only</b>.
        <br/>
        Featuring free skateboard lessons, the famous Sidewalk Slalom, bowl riding, live music and more!

        <Tabs value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary">
          <Tab label="12pm - 4pm"/>
          <Tab label="5pm - 8pm"/>
        </Tabs>

        {value === 0 && <TabContainer>
          <div className="drawerSubHead"><b>Saturday, July 13th, 2019 – Ballard Commons Skate Bowl</b></div>
          <div className="drawerSubHead">12-3pm: Clinics and Lessons provided by Skate Like a Girl</div>
          Lessons will start on the hour and last approximately 45 minutes<br/>
          Lesson participants should arrive and check in 15 minutes prior to start time<br/>
          Skateboards, helmet and safety pads will be available or you can bring your own<br/>
          On-site registration is available, pre-registration is preferred<br/>
          <div className="drawerSubHead">3pm: Sidewalk Slalom event</div>
          Test your skills on the slalom course, go for speed or for style.<br/>
          Prizes for fastest time, best style, gnarliest run and best outfit/costume.<br/>
          On-site registration is available, pre-registration is preferred.<br/>

        </TabContainer>}

        {value === 1 && <TabContainer>
          <div className="drawerSubHead">Youth Bowl Jam</div>
          Skills showcase in non-competitive environment.<br/>
          Prizes awarded for outstanding youth performance.<br/>
          On-site registration is available, pre-registration is preferred<br/>
          <div className="drawerSubHead">6pm: Womxn's Division</div>
          All ages, all abilities, all genders welcome.<br/>
          Cash prizes, gear and swag for outstanding performance.<br/>
          On-site registration is available, pre-registration is preferred.<br/>
          <div className="drawerSubHead">6:30 Spin to Win 360 contest</div>
          Flat Ground 360 open to all skaters.<br/>
          Cash prize for skater with most number 360’s.<br/>
          Registration not required.<br/>
          <div className="drawerSubHead">7pm: Open Contest</div>
          All skaters welcome to compete, legends division (40+) subject to participation.<br/>
          Cash prizes, gear and swag for outstanding performance.<br/>
          Best Trick, Longest Grind, Highest Air, Tricks for Cash<br/>
          On-site registration is available, pre-registration is preferred<br/>

        </TabContainer>}

        <div className="small">Note: Times are subject to change based on participation</div>
      </div>*/
    );
  }
}

export default FestiBowl;