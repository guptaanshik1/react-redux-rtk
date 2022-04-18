import React, { Component } from 'react'
import withTooltip from './withTooltip'

class Movie extends Component {
  render() {
    console.log(this.props)
    return (
      <div>Movie
        {this.props.showTooltip && <div>Some Tooltip</div>}
      </div>
    )
  }
}

export default withTooltip(Movie)