import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ads from './Ads'
import { getAds } from '../actions/getAds'

class AdsContainer extends Component {

  componentDidMount() {
    this.props.getAds()
  }

  render() {
    return (
      < Ads ads={this.props.ads} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ads: state.ads
  }
}
export default connect(mapStateToProps, { getAds })(AdsContainer)