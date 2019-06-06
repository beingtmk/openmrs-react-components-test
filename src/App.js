import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import createStore from './store';
import ReduxForm from './components/ReduxForm';

const store = createStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ReduxForm}/>
            </Switch>
          </BrowserRouter>
        </Provider>
      );    
  }
}


export default App;
