import React from 'react'
import { connect } from 'react-redux'
import Login from './Login';
import { modal } from '../actions/modal'


class LoginContainer extends React.Component {
  state = {
  }

  onChange = (add) => {
    this.setState({
    })
  }

  onSubmit = (add) => {
    add.preventDefault()
    this.setState({
    })
    //this.props.createAdd(this.state)
  }

  render() {
    return (<Login
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
      show={this.props.show}
      close={this.props.modal}
    />)
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.modal,
  }
}

export default connect(mapStateToProps, { modal })(LoginContainer)