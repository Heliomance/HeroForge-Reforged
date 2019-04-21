import React, {Component, Fragment} from "react";


class HFCharacterDetails extends Component {

  render() {
    const {character} = this.props;
    return (
      <Fragment>
        {JSON.stringify(character) || ''}
      </Fragment>
    );
  }
}

export default HFCharacterDetails;