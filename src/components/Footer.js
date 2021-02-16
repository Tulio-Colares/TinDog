import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="white-section" id="footer">
          <div className="container-fluid">
            <i className="social-icon fab fa-facebook-f"></i>
            <i className="social-icon fab fa-twitter"></i>
            <i className="social-icon fab fa-instagram"></i>
            <i className="social-icon fas fa-envelope"></i>
            <p>© Copyright 2021 TinDog</p>
          </div>
        </footer>
      </div>
    )
  }
}
