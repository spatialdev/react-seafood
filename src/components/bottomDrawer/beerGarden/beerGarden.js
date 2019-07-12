import React, {Component} from 'react';
import './beerGarden.scss';
import { breweries } from "../../../redux/constants";

class BeerGarden extends Component {

  render() {

    return (
      <div className="beerGarden">
        Enjoy Ballard beers from 12 of our breweries.
        <br/>
        Heritage Distilling Co. signature festival cocktails, a variety of hard ciders and an assortment of wine in our festival beer garden located near the Gravity Payments MainStage.
        <br/>
        The beer + cocktail garden is open from 5pm to 11pm on Friday, noon to 11pm on Saturday, and noon to 9pm on Sunday.
        <br/>
        Drink your Ballard Beer in style with a Commemorative Ballard SeafoodFest Silipint – purchase separately or a part of a beer token package deal.
        <br/>
        <div className="drawerSubHead">Hours</div>
        <table>
        <tbody>
          <tr>
            <td><b>Friday</b></td>
            <td>5pm - 11pm</td>
          </tr>
          <tr>
            <td><b>Saturday</b></td>
            <td>12pm - 11pm</td>
          </tr>
          <tr>
            <td><b>Sunday</b></td>
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