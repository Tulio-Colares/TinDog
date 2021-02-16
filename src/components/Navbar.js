import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark">

          <a className="navbar-brand" href="https://google.com">tindog</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Preços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cta">Download</a>
              </li>
            </ul>

          </div>
        </nav>

      </div>
    )
  }
}
