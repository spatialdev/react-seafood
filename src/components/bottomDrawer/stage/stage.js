import React, {Component} from 'react';
import './stage.scss';
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
        Wall-to-wall music Friday, Saturday and Sunday. What is Seattle without more music?
        <br /><br />

        <div className="drawerSubHead">Schedule</div>
        <Tabs value={value} 
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollButtons="on"
              variant="scrollable"
              scrollable>
          <Tab label="Friday July 12th" />
          <Tab label="Saturday - July 13th" />
          <Tab label="Sunday - July 14th" />
        </Tabs>

        {value === 0 && <TabContainer>
          Friday evening from 5:00 p.m. - 11:00 p.m. we kick off the festival with a Ballard Block Party featuring a DJ, #All4Doras and NITE WAVE.<br/>
          The Beer Garden will be open and six Food Trucks are available for your dining pleasure!<br/>
          (Full festival of vendors and events begins on Saturday at 11 a.m.)<br/><br/>
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
                <td className="stageTime">11:00 – 12:00 p.m.</td><td>Zumba with Ballard Health Club</td>
              </tr>
              <tr>
                <td className="stageTime">1:00 – 2:00 p.m.</td><td>Cold Comfort</td>
              </tr>
              <tr>
                <td className="stageTime">2:30 – 3:30 p.m.</td><td>The Hoot Hoots</td>
              </tr>
              <tr>
                <td className="stageTime">4:00 – 5:00 p.m.</td><td>Monsterwatch</td>
              </tr>
              <tr>
                <td className="stageTime">5:30 – 6:30 p.m.</td><td>Eldridge Gravy & the Court Supreme</td>
              </tr>
              <tr>
                <td className="stageTime">7:00 – 8:00 p.m.</td><td>Kyle Craft</td>
              </tr>
              <tr>
                <td className="stageTime">8:30 – 10:00 p.m.</td><td>The Joy Formidable</td>
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
                <td className="stageTime">1:30 - 2:30 p.m.</td><td>TELLERS</td>
              </tr>
              <tr>
                <td className="stageTime">3:00 – 4:00 p.m.</td><td>Dusty 45s</td>
              </tr>
              <tr>
                <td className="stageTime">4:30 – 5:30 p.m.</td><td>Carrie Akre</td>
              </tr>
              <tr>
                <td className="stageTime">6:00 – 7:00 p.m.</td><td>Pickwick</td>
              </tr>
              <tr>
                <td className="stageTime">7:30 – 9:00 p.m.</td><td>The Moondoggies</td>
              </tr>
            </tbody>
          </table>
        </TabContainer>}
      </div>
    );
  }
}

export default Stage;