import React, {Component} from 'react';
import './purpleSlide.css';
import { Tabs, Tab } from '../../../../node_modules/@material-ui/core';
import { TabContainer } from '../../../helpers';

class PurpleSlide extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;

    return (
      <div className="purpleSlide">
          A Ballard SeafoodFest mainstay, the Big Purple Slide has been serving kids young and old for years.

          <Tabs value={value} 
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary">
            <Tab label="Saturday - July 14th" />
            <Tab label="Sunday - July 15th" />
          </Tabs>
          
          {value === 0 && <TabContainer>11:00a.m. - 7:00p.m.</TabContainer>}
          {value === 1 && <TabContainer>11:00a.m. - 6:00p.m.</TabContainer>}
      </div>
    );
  }
}

export default PurpleSlide;