import React, {Component} from 'react';
import './kidsDeck.scss';
import { Tabs, Tab } from '@material-ui/core';
import { TabContainer } from '../../../helpers';

class KidsDeck extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
      null

      /* Leaving bottom drawer details out in 2022 app
      
      <div className="kidsDeck">
        Attention Parents and Kids! Don’t miss the fun in Ballard Commons Park! Check out these free and paid activities to keep little barnacles happy and entertained.
        <div className="drawerSubHead">Schedule</div>
        <Tabs value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary">
          <Tab label="Saturday - July 13th" />
          <Tab label="Sunday - July 14th" />
        </Tabs>

        {value === 0 && <TabContainer>
          <b>Noon – 5:00 p.m. </b><br />
          <div className="drawerSubHead">Ballard Commons Park Water Feature</div>
          <b>12:00 p.m. - 5:00 p.m.</b><br />
          The spray park at Ballard Commons Park (weather permitting) Bring the kiddos and cool off at the Park.
        
          <div className="drawerSubHead">Bouncy Houses *</div>
          <b>11:00 a.m. - 5:00 p.m.</b><br/>
          An assortment of bouncy houses will be available.

          <div className="drawerSubHead">Illumination Learning Studios Sponsored Events</div>
          <b>11:00 a.m. – 8:00 p.m.</b><br />

          Illumination Learning Studios is hosting a series of events designed to inspire your child’s imagination:<br/>
          Illumination Learning Studio: Free Raffle: Win 1 week of Summer Adventure Camp at ILS. ILS will be bringing more fun with Bubbles, Sidewalk Chalk, Parachute, Art Project (Jellyfish Shakers), ILS Dance Party and Balloons!
          <br/>
          Lil J’s Superdawgs Hot Dog Truck - Full Tilt Ice Cream

          <div className="drawerSubHead">Girl Scouts Troop 40827 and Boy Scouts Troop 827 Booth</div>
          <b>11:00 a.m. – 8:00 p.m.</b>
          
          <div className="drawerSubHead">Station 18 Fire Truck (unless called away)</div>
          <b>1:00 p.m. – 3:00 p.m.</b>

          <div className="drawerSubHead">Face painting by Amusements on Demand*</div>
          <b>12:00 p.m. – 3:00 p.m.</b>

          <div className="small">*These events require a fee</div>
        </TabContainer>}
        {value === 1 && <TabContainer>
          <b>11:00 a.m. – 3:00 p.m.</b><br />
          <div className="drawerSubHead">Ballard Commons Park Water Feature</div>
          <b>11:00 a.m. - 3:00 p.m.</b><br />
          The spray park at Ballard Commons Park (weather permitting) Bring the kiddos and cool off at the Park.
        
          <div className="drawerSubHead">Bouncy Houses *</div>
          <b>11:00 a.m. - 5:00 p.m.</b><br />
          An assortment of bouncy houses will be available.

          <div className="drawerSubHead">Face painting by Amusements on Demand*</div>
          <b>12:00 p.m. – 3:00 p.m.</b>

          <div className="drawerSubHead">Illumination Learning Studios Sponsored Events</div>
          <b>11:00 a.m. – 3:00 p.m.</b><br />

          <div className="drawerSubHead">Girl Scouts Troop 40827 and Boy Scouts Troop 827 Booth</div>
          <b>11:00 a.m. – 3:00 p.m.</b>

          <div className="drawerSubHead">Mr. Ryan’s Pirate Yoga</div>
          <b>11:00 a.m. – 11:30 a.m.</b>
          <div className="drawerSubHead">Illumination Studio Dance Party!</div>
          <b>11:30 a.m. –  noon</b>
          <div className="drawerSubHead">Magic Show with George A. Magician</div>
          <b> 12:00 p.m.  – 12:30 p.m.</b>
          <div className="drawerSubHead">Illumination Studio Music Making Workshop</div>
          <b>12:30 p.m. –  1:30 p.m.</b>
          <div className="drawerSubHead">Station 18 Fire Truck (unless called away)</div>
          <b>1:00 p.m. – 3:00 p.m.</b>
          <div className="drawerSubHead">CSZ Improv with Kids</div>
          <b>1:30 p.m. – 2:00 p.m.</b>
          <div className="drawerSubHead">Imagination Band</div>
          <b> 2:00 p.m. –  3:00 p.m.</b>

        </TabContainer>}
      </div>*/
    );
  }
}

export default KidsDeck;