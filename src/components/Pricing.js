import React, { Component } from 'react'

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <section className="white-section" id="pricing">

          <h2 className="section-heading">O plano certo pras necessidades de cada cão</h2>
          <p>Planos simples e preços acessíveis para você e seu cão.</p>

          <div className="row">

            <div className="pricing-column col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Chihuahua</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">Grátis</h2>
                  <p>5 Matches por dia</p>
                  <p>10 Mensagens por dia</p>
                  <p>Uso ilimitado do aplicativo</p>
                  <button className="btn btn-lg btn-block btn-outline-dark" type="button">Assine já!</button>
                </div>
              </div>
            </div>

            <div className="pricing-column col-lg-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3>Labrador</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">$25 / mês</h2>
                  <p>Matches ilimitados</p>
                  <p>Mensagens ilimitadas</p>
                  <p>Uso ilimitado do aplicativo</p>
                  <button className="btn btn-lg btn-block btn-dark" type="button">Assine já!</button>
                </div>
              </div>
            </div>

            <div className="pricing-column col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3>Mastiff</h3>
                </div>
                <div className="card-body">
                  <h2 className="price-text">$49 / mês</h2>
                  <p>Prioridade nas listas</p>
                  <p>Matches ilimitados</p>
                  <p>Mensagens ilimitadas</p>
                  <p>Uso ilimitado do aplicativo</p>
                  <button className="btn btn-lg btn-block btn-dark" type="button">Assine já!</button>

                </div>
              </div>
            </div>

          </div>

        </section>

      </div>
    )
  }
}
