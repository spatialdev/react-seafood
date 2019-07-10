import React, {Component} from 'react';
import './crabShack.scss';

class CrabShack extends Component {

  render() {

    return (
      <div className="crabShack">
        <div className="drawerSubHead">Hours</div>

        <table>
          <tbody>
          <tr>
            <td><b>Saturday - July 13th</b></td>
            <td>11:00am - 8:00pm</td>
          </tr>
          <tr>
            <td><b>Sunday - July 14th</b></td>
            <td>11:00am - 7:00pm</td>
          </tr>
          </tbody>
        </table>

        <br/>

        On Saturday and Sunday, we’ll be serving up some of Trident Seafood’s finest Alaskan King crab legs, butter and cocktail sauce for $15. Steamed Penn Cove Mussels and fresh barbecued Oysters are available for $12.<br/><br/>
        <b>TICKET PURCHASE:</b>
        <br/>
        Order items at the Visit Ballard Seafood Sales tent located at 22nd Ave NW and NW Market Street (next to Starbucks) and pick up your food at the Trident Seafoods/Visit Ballard Seafood Pick-up tent on 22nd Ave NW. Limited quantity of these items.
        <br/>
        Limited quantity of these items.

      </div>
    );
  }
}

export default CrabShack;