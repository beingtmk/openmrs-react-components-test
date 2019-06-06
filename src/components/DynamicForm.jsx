import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, Field } from 'redux-form';
import { Form } from 'react-bootstrap';

import NewInput from './InputField'

const handleSubmit = e => {
	e.preventDefault();
	console.log(e);
}

const onChange = e => {
	console.log(e)
}


const DynamicForm = props => {
  return (
		<Form horizontal onSubmit={handleSubmit}>

			<Field name="name" type="text" placeholder="Basic Usage" onChange={onChange} component={NewInput} />			
		</Form>
		);
};

const mapStateToProps = (state, props) => {
	return {};
}

export default connect(mapStateToProps)(reduxForm()(DynamicForm));
