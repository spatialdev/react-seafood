import React, {Component} from 'react';
import './purpleSlide.css';
import { Tabs, Tab } from '@material-ui/core';
import { TabContainer } from '../../../helpers';

class PurpleSlide extends Component {

  render() {

    return (
      <div className="purpleSlide">
          A Ballard SeafoodFest mainstay, the Big Purple Slide has been serving kids young and old for years.
        <br/><br/>
        <table>
        <tbody>
          <tr>
            <td>Saturday - July 14th</td>
            <td>11:00am - 7:00pm</td>
          </tr>
          <tr>
            <td>Sunday - July 15th</td>
            <td>11:00am - 6:00pm</td>
          </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

export default PurpleSlide;