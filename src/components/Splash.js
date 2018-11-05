import React, { Component } from 'react'

export default class Splash extends Component {
  render() {
    return (
      <div className="packr-splash">
        <div className="packr-splash__bg"></div>
        <div className="packr-splash__overlay"></div>
        <h1 className="packr-splash__title">packr</h1>
        <span className="packr-splash__sub">Travel checklists made easy</span>
        <span className="packr-splash__info">Connect your Email to create checklists</span>
        <div className="packr-splash__btn-group">
          <div className="packr-splash__btn packr-splash__btn--google">
            Connect Gmail
          </div>
          <div className="packr-splash__btn">
            Other Email
          </div>
        </div>
      </div>
    )
  }
}
