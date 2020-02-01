import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          (
            <div>
              <Header />
              <Component {...props} />
              <Footer />
            </div>
          )
        }
      />
    );
  }
}

export default PrivateRoute