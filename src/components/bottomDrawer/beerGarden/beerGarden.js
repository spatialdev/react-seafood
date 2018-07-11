import React, {Component} from 'react';
import './beerGarden.css';
import { breweries } from "../../../redux/constants";
import { Tabs, Tab } from '../../../../node_modules/@material-ui/core';
import { TabContainer } from '../../../helpers';

class BeerGarden extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
      <div className="beerGarden">
        Enjoy local beers and wine in our festival beer garden located near the Gravity and <a href="https://VisitBallard.com">VisitBallard.com</a> MainStage.
        <br/><br/>
        <div className="drawerSubHead">Hours</div>
        <Tabs value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary">
          <Tab label="Friday" />
          <Tab label="Saturday" />
          <Tab label="Sunday" />
        </Tabs>
        {value === 0 && <TabContainer>5pm - 10pm</TabContainer>}
        {value === 1 && <TabContainer>12pm - 11pm</TabContainer>}
        {value === 2 && <TabContainer>12pm - 9pm</TabContainer>}
        <div className="drawerSubHead">Beverages offered are crafted by:</div>
        {breweries.map((brewery)=> {
          return (
            <div key={brewery}>{brewery}</div>
          )
        })}
      </div>
    );
  }
}

export default BeerGarden;