import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './client/pages/Search';
import store from './client/utils/store';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={SearchPage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
