import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';

export class Navbar extends Component {

    state = {
        position: 'fixed',
        color: 'default'

    }

    render() {
        const { position, color } = this.state;

        return (
            <AppBar position={position} color={color}>
                <Hidden smUp>
                    <Toolbar>
                        <IconButton color="primary" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Hidden>
            </AppBar>
        );
    }
}