import React, {Component} from 'react';
import './lutefisk.scss';

class Lutefisk extends Component {

  render() {

    return (
      <div className="lutefisk">
        <b>Lutefisk Eating Contest</b>
        <br/>
        <br/>
        Nothing says Ballard and Seafood like 2 lbs. of lutefisk.<br/>
        Ozzie’s 4th Annual Lutefisk eating competition is a real crowd pleaser.<br/>
        Sponsored by Mountain Pacific Bank, Skal Beer Hall and Scandinavian Specialties.
        <div className="drawerSubHead">Date:</div>		
        Saturday at 3:00 p.m.
        <div className="drawerSubHead">Location:</div> 	
        Intersection of NW Market Street and 22nd Avenue NW
        <div className="drawerSubHead">Fee:</div>
        The contestant participation fee is only $10 and you will receive a t-shirt and all (hopefully) the lutefisk you can eat!
        <div className="drawerSubHead">Prizes:</div>
        Cash prizes will be awarded to the top winners.
      </div>
    );
  }
}

export default Lutefisk;