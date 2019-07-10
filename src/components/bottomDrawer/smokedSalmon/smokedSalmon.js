import React, {Component} from 'react';
import './smokedSalmon.scss';

class SmokedSalmon extends Component {

  render() {

    return (
      <div className="smokedSalmon">
        A Festival favorite: Trident Seafoods Alder-smoked salmon, garlic bread, cole slaw, and a choice of water.
        <div className="price">$14 per person.</div>
        <div className="drawerSubHead">Hours</div>
        <b>11:00am - 7:00pm</b>
        <div className="drawerSubHead">TICKET PURCHASE:</div>
        Order and purchase your Salmon BBQ meal at Visit Ballard Seafood Sales Booth located at 22nd
        Ave NW and NW Market Street (next to Starbucks).
        <br/>
        Pick up your meal at the Trident Seafoods/Visit Ballard Seafood Pick up tent on 22nd Avenue.
      </div>
    );
  }
}

export default SmokedSalmon;