import React, {Component} from 'react';
import {MuiThemeProvider, withStyles} from "@material-ui/core";
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import myTheme from "./theme";
import CharacterSheet from "./character-sheet/character-sheet";

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class App extends Component {
  state = {
    character: {
      abilities: {
        STR: 3,
        DEX: 4,
        CON: 5,
        INT: 6,
        WIS: 7,
        CHA: 8,
      }
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <CssBaseline/>
        <CharacterSheet character={this.state.character}/>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
