import React from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { addSmurf, updateSmurf } from "../../actions";

const AddSmurf = props => {
  const smurf = props.smurf
    ? {
        name: props.smurf.name,
        age: props.smurf.age,
        height: props.smurf.height,
        formAction: props.formAction
      }
    : {
        name: "",
        age: "",
        height: "",
        formAction: props.formAction
      };
  return (
    <>
      <Formik
        initialValues={smurf}
        onSubmit={(values, action) => {
          if (props.formAction === "add") {
            props.addSmurf({
              name: values.name,
              age: values.age,
              height: values.height
            });
            action.resetForm();
          } else if (props.formAction === "update") {
            props.updateSmurf({
              id: props.smurf.id,
              name: values.name,
              age: values.age,
              height: values.height
            });
          }
        }}
        render={props => (
          <Form onSubmit={props.handleSubmit} style={{ textAlign: "left" }}>
            <Form.Field>
              <label htmlFor="name">Name</label>
              <Form.Input
                name="name"
                onChange={props.handleChange}
                type="text"
                value={props.values.name}
              ></Form.Input>
            </Form.Field>
            <Form.Field>
              <label htmlFor="age">Age</label>
              <Form.Input
                name="age"
                onChange={props.handleChange}
                type="text"
                value={props.values.age}
              ></Form.Input>
            </Form.Field>
            <Form.Field>
              <label htmlFor="height">Height (cm)</label>
              <Form.Input
                name="height"
                onChange={props.handleChange}
                type="text"
                value={props.values.height}
              ></Form.Input>
            </Form.Field>
            <Form.Button loading={props.isProcessing} primary type="submit">
              {props.values.formAction === "add" ? "Add" : "Update"}
            </Form.Button>
          </Form>
        )}
      />
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({
  isProcessing: state.isProcessingRequest,
  formAction: ownProps.formAction,
  smurf: ownProps.smurf
});
const mapDispatchToProps = dispatch => ({
  addSmurf: smurf => {
    dispatch(addSmurf(smurf));
  },
  updateSmurf: smurf => {
    dispatch(updateSmurf(smurf));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSmurf);
