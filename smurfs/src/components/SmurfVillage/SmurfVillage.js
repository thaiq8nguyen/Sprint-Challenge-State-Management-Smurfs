import React from "react";
import { Grid, Message } from "semantic-ui-react";
import AddSmurf from "../AddSmurf/AddSmurf";
import SmurfList from "../SmurfList/SmurfList";
const SmurfVillage = () => {
  return (
    <>
      <Grid container columns={2} padded="vertically" divided>
        <Grid.Row>
          <Grid.Column width={4}>
            <AddSmurf />
          </Grid.Column>
          <Grid.Column width={12}>
            <SmurfList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SmurfVillage;
