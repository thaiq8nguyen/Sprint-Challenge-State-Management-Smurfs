import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { deleteSmurf } from "../../actions";
import SmurfForm from "../SmurfForm/SmurfForm";
const Smurf = props => {
  const [isFormDisplay, toggleForm] = useState(false);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.smurf.name}</Card.Header>
        <Card.Meta>
          Age: {props.smurf.age} / Height: {props.smurf.height}
        </Card.Meta>
      </Card.Content>
      {isFormDisplay && (
        <Card.Content>
          <SmurfForm formAction="update" smurf={props.smurf} />
        </Card.Content>
      )}
      <Card.Content extra>
        <Button
          color="blue"
          size="tiny"
          onClick={() => toggleForm(!isFormDisplay)}
        >
          Toggle Update
        </Button>

        <Button
          color="orange"
          loading={props.isProcessing}
          onClick={() => props.deleteSmurf(props.smurf.id)}
          size="tiny"
        >
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
};
const mapStateToProps = (state, ownProps) => ({
  isProcessing: state.isProcessingRequest,
  smurf: ownProps.smurf
});
const mapDispatchToProps = dispatch => ({
  deleteSmurf: smurfID => {
    dispatch(deleteSmurf(smurfID));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurf);
