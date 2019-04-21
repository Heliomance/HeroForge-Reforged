import React, {Component} from 'react';
import {AppBar, Drawer, IconButton, List, ListItem, MuiThemeProvider, Toolbar, withStyles} from "@material-ui/core";
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import myTheme from "./theme";
import CharacterSheet from "./character/sheet/character-sheet";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import HFCharacterDetails from "./character/details";
import MenuIcon from "@material-ui/icons/Menu"

const styles = (theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class App extends Component {
  state = {
    menuOpen: false,
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

  onCharacterSave = character => {
    this.setState({
      character: character,
    })
  };

  toggleMenu = () => {
    console.log("wohoo!");
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }))
  };

  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <CssBaseline/>

        <AppBar position={"static"}>
          <Toolbar>
            <IconButton color={"inherit"} onClick={this.toggleMenu}>
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>


        <Router>

          <Drawer open={this.state.menuOpen} onClose={this.toggleMenu}>
            <List >
              <ListItem button component={props => <Link to={"/"} {...props}/>} onClick={this.toggleMenu}>Home</ListItem>
              <ListItem button component={props => <Link to={"/sheet"} {...props}/>} onClick={this.toggleMenu}>Sheet</ListItem>
            </List>
          </Drawer>


          <Route path={"/sheet"} component={() =>
            <CharacterSheet character={this.state.character}/>
          } />
          <Route path={"/"} render={() =>
            <HFCharacterDetails character={this.state.character} />
          } />

        </Router>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
