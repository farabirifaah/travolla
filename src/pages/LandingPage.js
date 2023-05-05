import React, { Component } from 'react'

// import moduleName from 'elements';
import Header from 'parts/Header';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    )
  }
}
