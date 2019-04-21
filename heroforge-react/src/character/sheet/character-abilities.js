import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography/index";
import Grid from "@material-ui/core/Grid/index";
import TextField from "@material-ui/core/TextField/index";
import {abilityToBonus} from "../../helperFunctions";
import {withStyles} from "@material-ui/core";

const styles = {
  abilityScoreHeader: {
    fontsize: 80,
  }
};

const CharacterAbilityScores = ({abilities, classes}) => {
  return (
    <Fragment>
      <Grid container direction={"column"}>
        <Grid item container direction={"row"} spacing={8}>
          <Grid item xs={4}>
            <Typography align={"center"} variant={"caption"}>
              Ability
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align={"center"} variant={"caption"}>
              Score
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align={"center"} variant={"caption"}>
              Modifier
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align={"center"} variant={"caption"}>
              Temp. Score
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography align={"center"} variant={"caption"}>
              Temp. Modifier
            </Typography>
          </Grid>
        </Grid>
        {Object.keys(abilities).map((ability, abIndex) => {
          return (
            <Grid item container direction={"row"} spacing={8} key={abIndex}>
              <Grid item xs={4}>
                <Typography align={"center"}>
                  {ability}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField value={abilities[ability]}/>
              </Grid>
              <Grid item xs={2}>
                <TextField value={abilityToBonus(abilities[ability])}/>
              </Grid>
              <Grid item xs={2}>
                <TextField/>
              </Grid>
              <Grid item xs={2}>
                <TextField/>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Fragment>
  )
};

export default withStyles(styles)(CharacterAbilityScores);