import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from './../logo_lila.png'

class Sidebar extends React.Component {

    render() {
        return(
        <Drawer open={true}>
                <img className="logo" src={logo} alt={"logo"}/> 
                <MenuItem>Announcements </MenuItem>
                <MenuItem>Task Boards </MenuItem>
          </Drawer>
        );
    }
}


export default Sidebar;
