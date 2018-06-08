import React, {Component} from 'react';
import windowSize from 'react-window-size';
import Button from '@material-ui/core/Button';
import './rightMenu.css';

class RightMenu extends Component {

  state = {};

  componentDidMount() {

  }

  render() {

    return (
      <div className="RightMenu" color="secondary">
        <Button variant="contained">Vendor List</Button>
      </div>
    );
  }

}

export default windowSize(RightMenu);
