import React, {Component} from 'react';
import './smokedSalmon.css';

class SmokedSalmon extends Component {

  render() {

    return (
      <div className="smokedSalmon">
        A Festival favorite: Trident Seafoods Alder-smoked salmon, garlic bread, cole slaw, and a choice of water
        or soft drink.
        <div className="price">$12 per person.</div>
        <div className="drawerSubHead">Hours</div>
        <b>11:00am - 7:00pm</b>
        <div className="drawerSubHead">TOKEN PURCHASE:</div> 
        Tokens are available only at the Information Booth: Crab, mussels, bbq oysters and
        Salmon Token Sales Stations located at 22nd Ave NW and NW Market Street (next to Starbucks).
        <br/>We have a limited quantity of these tasty seafood offerings, so buy your tokens early!
        <br/><br/><b>PURCHASE TOKENS FIRST THEN PICK UP SALMON ON THE NORTH SIDE OF MARKET STREET ON 22nd AVE
        NW</b> (In front of Ballard Health Club and Chase Bank)
      </div>
    );
  }
}

export default SmokedSalmon;