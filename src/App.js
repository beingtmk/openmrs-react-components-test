import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import createStore from './store';
import Accordion from './components/Accordion';
import TabbedComponent from './components/TabbedComponent';
import SwitchComponent from './components/Switch';
// import DynamicForm from './components/DynamicForm';
import ReduxForm from './components/ReduxForm';

const store = createStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={TabbedComponent}/>
              <Route exact path="/tabs" component={TabbedComponent}/>
              <Route exact path="/accordion" component={Accordion}/>
              <Route exact path="/switch" component={SwitchComponent}/>
              <Route exact path="/redux-form" component={ReduxForm}/>

            </Switch>
          </BrowserRouter>
        </Provider>
      );    
  }
}


export default App;
