import React from 'react'
import { connect } from 'react-redux'
import Login from './Login';
import { modal } from '../actions/modal'
import { login } from '../actions/login'


class LoginContainer extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state)
    this.setState({
      username: '',
      email: '',
      password: '',
    })
    this.props.modal()
  }

  render() {
    return (
      <Login
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        show={this.props.show}
        close={this.props.modal}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.modal,
  }
}

export default connect(mapStateToProps, { modal, login })(LoginContainer)