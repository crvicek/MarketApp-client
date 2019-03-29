import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ad from './Ad'
import { getAd } from '../actions/getAd'

class AdContainer extends Component {
  state = {
  }

  componentDidMount() {
    this.props.getAd(this.props.match.params.id)
  }

  render() {
    return <Ad ad={this.props.ad} />
  }
}

const mapStateToProps = (state) => ({
  ad: state.ad
})

export default connect(mapStateToProps, { getAd })(AdContainer)