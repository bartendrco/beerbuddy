import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchPage from './client/pages/Search';
import DetailPage from './client/pages/Search/Detail';
import store from './client/utils/store';
import PrivateRoute from './client/utils/privateRoute';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <PrivateRoute exact path="/" component={SearchPage} />
          <PrivateRoute exact path="/detail" component={DetailPage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
