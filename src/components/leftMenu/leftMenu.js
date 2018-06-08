import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  drawerPaper: {
    width: 240,
  },
});

class PermanentDrawer extends Component {
  state = {
    clickedMenuItem: null
  };

  handleClickedItem = (itemId) => {
    this.props.clickedMenuItem(itemId);
  };

  render() {
    const { classes } = this.props;

    const items_1 = [
      { id: 0, title: 'Item 1' },
      { id: 1, title: 'Item 2' },
      { id: 2, title: 'Item 3' }
    ];

    const items_2 = [
      { id: 3, title: 'Item 4' },
      { id: 4, title: 'Item 5' },
      { id: 5, title: 'Item 6' }
    ];

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.root}>
          <List>
            {items_1.map((item) => {
              return (<ListItem button key={item.id} onClick={() => this.handleClickedItem(item.id)}>
                <ListItemText primary={item.title}/>
              </ListItem>);
            })}
            <Divider/>
            {items_2.map((item) => {
              return (<ListItem button key={item.id} onClick={() => this.handleClickedItem(item.id)}>
                <ListItemText primary={item.title}/>
              </ListItem>);
            })}
          </List>
        </div>
      </Drawer>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);
