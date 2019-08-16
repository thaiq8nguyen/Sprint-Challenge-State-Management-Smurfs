import React from "react";
import { connect } from "react-redux";
import { Container, Header } from "semantic-ui-react";
import SmurfForm from "../SmurfForm/SmurfForm";

const AddSmurf = props => {
  return (
    <>
      <Container textAlign="left">
        <Header>Register Smurf</Header>
        <SmurfForm formAction="add" smurfID="" />
      </Container>
    </>
  );
};

export default AddSmurf;
