import React from 'react';
import {Tabs} from '@openmrs/react-components';

const TabbedComponent = props => {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="PatientIn">
          Welcome, Dear <em>Patient</em>!
        </div>
        <div label="PatientOut">
          Sad to see you <em>Go</em>!
        </div>
      </Tabs>
    </div>  );
};

export default TabbedComponent;
