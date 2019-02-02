import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/launches';
import Launch from './components/launch';
import Navigation from './components/navigation';
import Rockets from './components/rockets';
import Rocket from './components/rocket';
import './App.css';
import logo from './logo.png'

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router >
          <div className="container">
            <img
              src={logo}
              alt='SpaceX logo'
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Navigation />
            <Route exact path='/' component={Launches} />
            <Route exact path='/launch/:flight_number' component={Launch} />
            <Route exact path='/rockets' component={Rockets} />
            <Route exact path='/rockets/:rocket_id' component={Rocket} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
