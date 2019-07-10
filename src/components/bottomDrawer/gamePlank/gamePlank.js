import React, {Component} from 'react';
import './gamePlank.scss';

class GamePlank extends Component {

  render() {

    return (
      <div className="gamePlank">
        Continue down Ballard Avenue, just past the Gravity Payments MainStage, and enjoy our Game Plank on Saturday!
        <div className="drawerSubHead">
          Date: SATURDAY ONLY from 11:00 a.m. – 6:00 p.m.<br />
          Location: Ballard Avenue
        </div>
        We’ll have a variety of free and fun games for you to play including:<br /><br />
        Corn Hole<br />
        Ladder Ball<br />
        Giant Jenga<br />
        Chill Out Lounge<br /> 
        Doggie Comfort Station<br />
        Aerial performances by The Cabiri – Arcadia<br />
        Girl Scout Troop 44477<br />
        Page Ahead Children’s Literacy booth<br />
        Verity Credit Union Badminton Station<br />
        and much more fun for the young at heart!<br /><br />
        HomeStreet Bank will be displaying the HomeStreet Bank Hydroplane replica, “Miss HomeStreet” stop by their booth and say hi. You won’t want to miss it!
      </div>
    );
  }
}

export default GamePlank;