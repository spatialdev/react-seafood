import React, {Component} from 'react';
import './lutefisk.css';

class Lutefisk extends Component {

  render() {

    return (
      <div className="lutefisk">
        <b>Sponsored by Mountain Pacific Bank</b>
        <br/>
        <br/>
        Nothing says Ballard and Seafood like 2 lbs. of lutefisk. Ozzie’s 3nd Annual Lutefisk eating competition is a real crowd pleaser.
        <div className="drawerSubHead">Date:</div>		
        Sunday at 3:00 p.m.
        <div className="drawerSubHead">Location:</div> 	
        Intersection of NW Market Street and 22nd Avenue NW
        <div className="drawerSubHead">Fee:</div>  	
        The entrance fee is only $10 and all (hopefully) the lutefisk you can eat!
        <div className="drawerSubHead">Prizes:</div> 	
        Cash prizes will be awarded to the top winners.
      </div>
    );
  }
}

export default Lutefisk;