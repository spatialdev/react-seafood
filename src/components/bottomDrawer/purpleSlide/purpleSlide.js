import React, {Component} from 'react';
import './purpleSlide.scss';

class PurpleSlide extends Component {

  render() {

    return (
      <div className="purpleSlide">
        A Ballard SeafoodFest mainstay, the Big Purple Slide has been delivering the fun to kids young and old for years.
        <br/><br/>
        <table>
        <tbody>
          <tr>
            <td><b>Saturday - July 13th</b></td>
            <td>11:00am - 10:00pm</td>
          </tr>
          <tr>
            <td><b>Sunday - July 15th</b></td>
            <td>11:00am - 8:00pm</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default PurpleSlide;