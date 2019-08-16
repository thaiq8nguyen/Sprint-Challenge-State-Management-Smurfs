import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Header, Grid } from "semantic-ui-react";
import { getSmurfs, deleteSmurf } from "../../actions";
import Smurf from "./Smurf";

const SmurfList = props => {
  useEffect(() => {
    props.getSmurfs();
  }, []);
  return (
    <Container textAlign="left">
      <Header>Smurf Village</Header>
      <Grid columns={3} stackable>
        {props.smurfs.map(smurf => (
          <Grid.Column key={smurf.id}>
            <Smurf smurf={smurf} />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSmurfs: () => {
      dispatch(getSmurfs());
    },

    deleteSmurf: id => {
      dispatch(deleteSmurf(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfList);
