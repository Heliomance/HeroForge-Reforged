import React, {Component} from "react";
import Grid from "@material-ui/core/Grid/index";
import TextField from "@material-ui/core/TextField/index";
import CharacterAbilityScores from "./character-abilities";
import {withStyles} from "@material-ui/core";

class CharacterSheet extends Component {

  render() {
    const {character} = this.props;

    return (
      <Grid container direction={"column"}>
        <Grid item container direction={"row"} spacing={8}> {/*Descriptive details*/}
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

        <Grid item container direction={"row"} spacing={8}> {/*begin stat block*/}
          <Grid item xs={4}>
            <CharacterAbilityScores abilities={character.abilities}/>
          </Grid>
          <Grid item xs={8} container direction={"row"} spacing={8}>
            <Grid item xs={2}>
              <TextField
                fullWidth
                disabled
                variant={"outlined"}
                type={"number"}
                label={"HP"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                variant={"outlined"}
                type={"number"}
                label={"Wounds"}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                variant={"outlined"}
                type={"number"}
                label={"Nonlethal"}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                disabled
                variant={"outlined"}
                type={"number"}
                label={"Speed"}
              />
            </Grid>

            <Grid item xs={6} container direction={"row"}>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant={"outlined"}
                  type={"number"}
                  label={"AC"}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant={"outlined"}
                  type={"number"}
                  label={"Touch"}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant={"outlined"}
                  type={"number"}
                  label={"FF"}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  disabled
                  variant={"outlined"}
                  type={"number"}
                  label={"Init"}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  fullWidth
                  disabled
                  variant={"outlined"}
                  type={"number"}
                  label={"SR"}
                />
              </Grid>

              <Grid item xs={12}>DR</Grid>
            </Grid>

            <Grid item xs={6}>Skills Header</Grid>
          </Grid>
        </Grid>

        <Grid item container direction={"row"}>{/*main block*/}
          <Grid item xs={8} container direction={"row"}>{/*stuff*/}
            <Grid item xs={8} container direction={"column"}>
              <Grid item xs container direction={"row"}>
                <Grid item xs={4}>Saving Throws</Grid>
                <Grid item xs>Total</Grid>
                <Grid item xs>Base Save</Grid>
                <Grid item xs>Ability Modifier</Grid>
                <Grid item xs>Misc Modifier</Grid>
                <Grid item xs>Temp Modifier</Grid>
              </Grid>
              <Grid item xs container direction={"row"}>
                <Grid item xs={4}>Fortitude</Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth variant={"outlined"} type={"number"}/>
                </Grid>
              </Grid>

              <Grid item xs container direction={"row"}>
                <Grid item xs={4}>Reflex</Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth variant={"outlined"} type={"number"}/>
                </Grid>
              </Grid>

              <Grid item xs container direction={"row"}>
                <Grid item xs={4}>Will</Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth disabled variant={"outlined"} type={"number"}/>
                </Grid>
                <Grid item xs>
                  <TextField fullWidth variant={"outlined"} type={"number"}/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>Conditionals</Grid>
          </Grid>

          <Grid item xs={4} container direction={"row"}>{/*skills*/}
            Skills
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default CharacterSheet;