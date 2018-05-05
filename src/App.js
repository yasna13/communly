import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey500} from 'material-ui/styles/colors';

import TodoComponent from './components/todo-list';
import Sidebar from './components/side-bar';


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
const muiTheme = getMuiTheme({
  palette: {
    textColor: '#597ec0',
    primary1Color: '#9ab1d9',
    primary2Color: '#9ab1d9',
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="main-wrapper">
          <Sidebar/>
          <div className="page-content">
            <TodoComponent/>
            <TodoComponent/>
            <TodoComponent/>   
          </div>       
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
