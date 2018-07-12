import React, {Component} from 'react';
import './beerGarden.css';
import { breweries } from "../../../redux/constants";
import { Tabs, Tab } from '@material-ui/core';
import { TabContainer } from '../../../helpers';

class BeerGarden extends Component {

  render() {

    return (
      <div className="beerGarden">
        Enjoy local beers and wine in our festival beer garden located near the Gravity and <a href="https://VisitBallard.com">VisitBallard.com</a> MainStage.
        <br/>
        <div className="drawerSubHead">Hours</div>
        <table>
        <tbody>
          <tr>
            <td>Friday</td>
            <td>5pm - 10pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>12pm - 11pm</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>12pm - 9pm</td>
          </tr>
        </tbody>
        </table>

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