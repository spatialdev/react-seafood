import React, {Component} from 'react';
import './kidsDeck.css';
import { Tabs, Tab } from '../../../../node_modules/@material-ui/core';
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
      <div className="kidsDeck">
        Attention Parents and Kids! Don’t miss the fun in Ballard Commons Park! Check out these free and paid activities to keep little barnacles happy and entertained.
        <div className="drawerSubHead">Schedule</div>
        <Tabs value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary">
          <Tab label="Saturday - July 14th" />
          <Tab label="Sunday - July 15th" />
        </Tabs>

        {value === 0 && <TabContainer>
          <div className="drawerSubHead">Ballard Commons Park Water Feature</div>
          <b>11:00 a.m. - 8:00 p.m.</b><br />
          The spray park at Ballard Commons Park (weather permitting) Bring the kiddos and cool off at the Park.
        
          <div className="drawerSubHead">Bouncy Houses *</div>
          <b>11:00 a.m. - 7:00 p.m.</b><br />
          An assortment of bouncy houses will be available.
          

          <div className="drawerSubHead">Illumination Learning Studios Sponsored Events</div>
          <b>11:00 a.m. – 8:00 p.m.</b><br />
          Illumination Learning Studios is hosting a series of events designed to inspire your child’s imagination:<br />

          My ID Club, Balloons, Instruments, Sound Experiment, Art Project, Hula Hoops, Bubbles, Pop a Shots, Sidewalk Chalk Fun, Balloon Artists, and Face Painters

          <div className="drawerSubHead">Seattle Public Library-Ballard Branch Activities</div>
          <b>11:00 a.m. – 8:00 p.m.</b>
          
          <div className="drawerSubHead">Station 18 Fire Truck</div>
          <b>1:00 p.m. – 3:00 p.m.</b>

          <div className="drawerSubHead">Facepainting by Tiny Art Face Painting *</div>
          <b>1:00 p.m. – 3:00 p.m.</b>

          <div className="small">*These events require a fee</div>
        </TabContainer>}
        {value === 1 && <TabContainer>
          <div className="drawerSubHead">Ballard Commons Park Water Feature</div>
          <b>11:00 a.m. - 8:00 p.m.</b><br />
          The spray park at Ballard Commons Park (weather permitting) Bring the kiddos and cool off at the Park.
        
          <div className="drawerSubHead">Bouncy Houses *</div>
          <b>11:00 a.m. - 6:00 p.m.</b><br />
          An assortment of bouncy houses will be available.
          

          <div className="drawerSubHead">Illumination Learning Studios Sponsored Events</div>
          <b>11:00 a.m. – 8:00 p.m.</b><br />
          Illumination Learning Studios is hosting a series of events designed to inspire your child’s imagination:<br />

          My ID Club, Balloons, Instruments, Sound Experiment, Art Project, Hula Hoops, Bubbles, Pop a Shots, Sidewalk Chalk Fun, Balloon Artists, and Face Painters
	
          <div className="drawerSubHead">Johannes Drumming</div>
          <b>12:00-12:45 P.M.</b>

          <div className="drawerSubHead">Mr. Ryan’s Pirate Yoga</div>
          <b>1:00-1:45 P.M.</b>	

          <div className="drawerSubHead">ILS Performers, Break Dance Crew, Choir, and Beckett Piano</div>
          <b>2:00-2:45 P.M.	</b>

          <div className="drawerSubHead">CSZ Improv with Kids</div>
          <b>3:00-3:45 P.M.	</b>

          <div className="drawerSubHead">ILS Dance Party</div>
          <b>4:00-4:45 P.M.</b>
        </TabContainer>}
      </div>
    );
  }
}

export default KidsDeck;