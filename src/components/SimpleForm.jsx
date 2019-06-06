import React from "react";
import { Field, reduxForm } from "redux-form";
import { ARangePicker, ASwitch, ASlider, ASelect, AOption, AInputNumber } from '@openmrs/react-components'; 

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} style={{margin: "20px"}}>


      <Field label="Status" name="status" id="status" component={ASwitch} type="checkbox" />
      <Field label="Children" name="children" id="children" component={ASlider} type="number" />
      <Field label="Counter" name="counter" id="counter" component={AInputNumber} />

      <Field mode="multiple" placeholder="Please select favourite colors" label="Favoraite Color" name="favoriteColor" component={ASelect}>
        <AOption value="ff0000">Red</AOption>
        <AOption value="00ff00">Green</AOption>
        <AOption value="0000ff">Blue</AOption>
      </Field>


      <Field
        label="Filter dates"
        name="rangepicker"
        component={ARangePicker}
        placeholder={["From", "To"]}
        hasFeedback
        onFocus={e => e.preventDefault()}
        onBlur={e => e.preventDefault()}
      />

        <button type="primary" disabled={pristine || submitting} htmlType="submit">
          Submit
        </button>

        <button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  return errors;
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
  validate
})(SimpleForm);
