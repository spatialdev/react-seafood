import React, {Component} from 'react';
import './stage.css';
import { Tabs, Tab } from '@material-ui/core';
import { TabContainer } from '../../../helpers';

class Stage extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
      <div className="stage">
        Wall-to-wall music Friday evening, Saturday and Sunday. What is Seattle without more music?
        <br /><br />

        <div className="drawerSubHead">Schedule</div>
        <Tabs value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable>
          <Tab label="Friday - July 13th" />
          <Tab label="Saturday - July 14th" />
          <Tab label="Sunday - July 15th" />
        </Tabs>

        {value === 0 && <TabContainer>
          (Beer + Cocktail Garden opens and only Food Trucks available 5 PM-10 PM)<br /><br />
          <table>
            <tbody>
              <tr>
                <td className="stageTime">6:00 – 7:00 p.m.</td><td>DJ</td>
              </tr>
              <tr>
                <td className="stageTime">7:00 – 7:30 p.m.</td><td>#All4Doras</td>
              </tr>
              <tr>
                <td className="stageTime">7:45 – 10:00 p.m.</td><td>Nite Wave</td>
              </tr>
            </tbody>
          </table>
        </TabContainer>}
        {value === 1 && <TabContainer>
          <table>
            <tbody>
              <tr>
                <td className="stageTime">12:00 – 12:40 p.m.</td><td>Zumba with Ballard Health Club</td>
              </tr>
              <tr>
                <td className="stageTime">1:00 – 2:00 p.m.</td><td>Lanford Black</td>
              </tr>
              <tr>
                <td className="stageTime">2:30 – 3:30 p.m.</td><td>Acid Tongue</td>
              </tr>
              <tr>
                <td className="stageTime">4:00 – 5:00 p.m.</td><td>Smokey Brights</td>
              </tr>
              <tr>
                <td className="stageTime">5:30 – 6:30 p.m.</td><td>The Grizzled Mighty</td>
              </tr>
              <tr>
                <td className="stageTime">7:00 – 8:00 p.m.</td><td>All Them Witches</td>
              </tr>
              <tr>
                <td className="stageTime">8:30 – 10:00 p.m.</td><td>Blitzen Trapper</td>
              </tr>
            </tbody>
          </table>
        </TabContainer>}
        {value === 2 && <TabContainer>
          <table>
            <tbody>
              <tr>
                <td className="stageTime">12:00 – 1:00p.m.</td><td>School of Rock</td>
              </tr>
              <tr>
                <td className="stageTime">1:30 - 2:30 p.m.</td><td>Whitney Monge</td>
              </tr>
              <tr>
                <td className="stageTime">3:00 – 4:00 p.m.</td><td>Gypsy Temple</td>
              </tr>
              <tr>
                <td className="stageTime">4:30 – 5:30 p.m.</td><td>Whiskey Shivers</td>
              </tr>
              <tr>
                <td className="stageTime">6:00 – 7:00 p.m.</td><td>Purple Mane</td>
              </tr>
              <tr>
                <td className="stageTime">7:30 – 9:00 p.m.</td><td>The Dead South</td>
              </tr>
            </tbody>
          </table>
        </TabContainer>}
      </div>
    );
  }
}

export default Stage;