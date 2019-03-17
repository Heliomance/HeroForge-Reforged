import React, {Component} from 'react';
import {CardHeader, MuiThemeProvider, TextField, Typography, withStyles} from "@material-ui/core";
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {abilityToBonus} from "./helperFunctions";

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
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={myTheme}>
        <CssBaseline/>
        <Grid container direction={"column"}>
          <Grid item container direction={"row"} spacing={8}>
            <Grid item xs={4}>
              <TextField label={"Character Name"} fullWidth/>
            </Grid>
            <Grid item xs={4}>
              <TextField label={"Player"} fullWidth/>
            </Grid>
          </Grid>
          <Grid item container direction={"row"} spacing={8}>
            <Grid item xs={4}>
              <TextField label={"Classes/Levels"} fullWidth/>
            </Grid>
            <Grid item xs={2}>
              <TextField label={"Gender"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Alignment"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Deity"} fullWidth/>
            </Grid>
          </Grid>
          <Grid item container direction={"row"} spacing={8}>
            <Grid item xs={1}>
              <TextField label={"Race"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Size"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Age"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Height"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Weight"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Eyes"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Hair"} fullWidth/>
            </Grid>
            <Grid item xs={1}>
              <TextField label={"Skin"} fullWidth/>
            </Grid>
          </Grid>
          <Grid item container direction={"column"}>
            <Card>
              <CardHeader>
                <Typography>
                  Abilities
                </Typography>
              </CardHeader>
              <Grid container direction={"column"}>
                <Grid item container direction={"row"} spacing={8} xs={4}>
                  <Grid item xs={4}>
                    <Typography align={"center"}>
                      Ability
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align={"center"}>
                      Score
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align={"center"}>
                      Modifier
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align={"center"}>
                      Temporary Modifier
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography align={"center"}>
                      Temporary Modifier
                    </Typography>
                  </Grid>
                </Grid>
                {Object.keys(this.state.character.abilities).map((ability) => {
                  return (
                    <Grid item container direction={"row"} spacing={8} xs={4}>
                      <Grid item xs={4}>
                        <Typography align={"center"}>
                          {ability}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField value={this.state.character.abilities[ability]}/>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField value={abilityToBonus(this.state.character.abilities[ability])}/>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField/>
                      </Grid>
                      <Grid item xs={2  }>
                        <TextField/>
                      </Grid>
                    </Grid>
                  )
                })}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
