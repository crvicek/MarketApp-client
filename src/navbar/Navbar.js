import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { modal } from '../actions/modal'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar' >
        <h1 className='NavBar Title'>
          <Link to='/' >
            Market App
      </Link>
        </h1>
        <span className='NavBar Menu' >
          <Link to='/new' >Sell</Link>
          <Link to={true} onClick={this.props.modal} >Login</Link>
        </span>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(mapStateToProps, { modal })(NavBar)
