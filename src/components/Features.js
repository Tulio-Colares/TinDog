import React, { Component } from 'react'

export default class Features extends Component {
  render() {
    return (
      <div>
        <section className="white-section" id="features">

          <div className="container-fluid">

            <div className="row">
              <div className="feature-box col-lg-4">
                <i className="icon fas fa-check-circle fa-4x"></i>
                <h3 className="feature-title">Fácil de usar</h3>
                <p>Tão fácil de usar, que até o seu cachorro conseguiria</p>
              </div>

              <div className="feature-box col-lg-4">
                <i className="icon fas fa-bullseye fa-4x"></i>
                <h3 className="feature-title">Clientela de Elite</h3>
                <p>Nós temos todos os cachorros, os melhores cães</p>
              </div>

              <div className="feature-box col-lg-4">
                <i className="icon fas fa-heart fa-4x"></i>
                <h3 className="feature-title">Eficácia garantida</h3>
                <p>Encontre o amor da vida do seu cãozinho ou o seu dinheiro de volta!</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}
