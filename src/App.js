import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AdsContainer from './ads/AdsContainer'
import AdContainer from './ad/AdContainer';
import CreateAdContainer from './createAd/CreateAdContainer';
import NavBar from './navbar/Navbar';
import LoginContainer from './login/LoginContainer'

export const baseUrl = 'https://market-app-server.herokuapp.com'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LoginContainer />
        <div>
          <Route exact path="/" component={AdsContainer} />
          <Route path="/new" component={CreateAdContainer} />
          <Route path="/ads/:id" component={AdContainer} />
        </div>
      </div>
    );
  }
}
export default App