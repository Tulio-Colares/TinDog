import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div>
        <div className="row">

          <div className="col-lg-6">
            <h1 className="big-heading">Conheça os cães mais interessantes, perto de você.</h1>
            <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
            <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play"></i> Download</button>
          </div>

          <div className="col-lg-6">
            <img className="title-image" src="images/iphone6.png" alt="iphone-mockup" />
          </div>

        </div>
      </div>
    )
  }
}
