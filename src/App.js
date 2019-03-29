import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AdsContainer from './ads/AdsContainer'
import AdContainer from './ad/AdContainer';
import CreateAdContainer from './createAd/CreateAdContainer';
import NavBar from './navbar/Navbar';
import { connect } from 'react-redux'
import LoginContainer from './login/LoginContainer'
import { modal } from './actions/modal'

export const baseUrl = 'https://market-app-server.herokuapp.com'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar onClick={this.props.modal} />
        <LoginContainer />
        <div>
          <Route path="/" exact component={AdsContainer} />
          <Route path="/new" component={CreateAdContainer} />
          <Route path="/ads/:id" component={AdContainer} />
        </div>
      </div>
      // <div className="App App-header">
      //   <div className='Header'>
      //     <h1>Market App</h1>
      //   </div>

      // </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    test: state.ads,
  }
}
export default connect(mapStateToProps, { modal })(App)