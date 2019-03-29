import React from 'react'
import { connect } from 'react-redux'
import { createAd } from '../actions/createAd'
import AdForm from './AdForm'

class CreateAdContainer extends React.Component {
  state = {
    title: '',
    description: '',
    price: '',
    image: '',
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = (ad) => {
    ad.preventDefault()
    // this.setState({
    //   title: '',
    //   description: '',
    //   price: '',
    //   image: '',
    // })
    this.props.createAd(this.state)
  }

  render() {
    console.log('myState', this.state)
    return (<AdForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

const mapStateToProps = (state) => {
  return {
    ad: state.ad,
  }
}
export default connect(mapStateToProps, { createAd })(CreateAdContainer)