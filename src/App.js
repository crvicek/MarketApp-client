import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AddContainer from './add/AddContainer'
import SingleAddContainer from './single-add/SingleAddContainer';
import CreateAddContainer from './createAdd/CreateAddContainer';
import NavBar from './navbar/Navbar';
import { connect } from 'react-redux'
import LoginContainer from './login/LoginContainer';
import { modal } from './actions/modal'

export const baseUrl = 'https://market-app-server.herokuapp.com'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar onClick={this.props.modal} />
        <LoginContainer />
      </div>
      // <div className="App App-header">
      //   <div className='Header'>
      //     <h1>Market App</h1>
      //     <a href='/new' className='New-add' >New Ad</a>
      //   </div>

      //   <Route exact path="/" component={AddContainer} />
      //   <Route path="/ads/:id" component={SingleAddContainer} />
      //   <Route path="/new" component={CreateAddContainer} />
      // </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ads: state.ads,
  }
}
export default connect(mapStateToProps, { modal })(App)