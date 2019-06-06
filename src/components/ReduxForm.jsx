import React from 'react';
import { Values } from "redux-form-website-template";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";


const ReduxForm = props => {
  return (
    <div>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
      <Values form="simple" />
    </div>
  );
};

export default ReduxForm;
