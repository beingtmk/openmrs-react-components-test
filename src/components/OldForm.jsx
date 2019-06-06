import React from "react";
import { Field, reduxForm } from "redux-form";

import { Form, Radio, Select, Button } from "antd";
import { AInput, ARadioGroup, ASelect, ACheckbox, ATextarea, ARangePicker, ASwitch, ASlider } from './AntdWidgets'; 
const FormItem = Form.Item;
const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 14,
      offset: 6
    }
  }
};

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field label="First Name" name="firstName" component={AInput} placeholder="First Name" hasFeedback />

      <Field label="Last Name" name="lastName" component={AInput} placeholder="Last Name" />

      <Field label="Email" name="email" component={AInput} type="email" placeholder="Email" />

      <Field label="Sex" name="sex" component={ARadioGroup} value="male">
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </Field>

      <Field label="Favoraite Color" name="favoriteColor" component={ASelect}>
        <Option value="ff0000">Red</Option>
        <Option value="00ff00">Green</Option>
        <Option value="0000ff">Blue</Option>
      </Field>

      <Field label="Employed" name="employed" id="employed" component={ACheckbox} type="checkbox" />

      <Field label="Status" name="status" id="status" component={ASwitch} type="checkbox" />
      <Field label="Children" name="children" id="children" component={ASlider} type="number" />

      <Field
        label="Filter dates"
        name="rangepicker"
        component={ARangePicker}
        placeholder={["From", "To"]}
        hasFeedback
        onFocus={e => e.preventDefault()}
        onBlur={e => e.preventDefault()}
      />

      <Field label="Notes" name="notes" component={ATextarea} />

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" disabled={pristine || submitting} htmlType="submit" style={{ marginRight: "10px" }}>
          Submit
        </Button>

        <Button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </FormItem>
    </Form>
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
