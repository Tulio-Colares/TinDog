import React, { Component } from 'react'

export default class CalltoAction extends Component {
  render() {
    return (
      <div>
        <section className="colored-section" id="cta">

          <div className="container-fluid">

            <h3 className="big-heading">Ache o verdadeiro amor do seu cão hoje mesmo!</h3>
            <button className="download-button btn btn-lg btn-dark" type="button"><i class="fab fa-apple"></i> Download</button>
            <button className="download-button btn btn-lg brn-light" type="button"><i class="fab fa-google-play"></i> Download</button>
          </div>
        </section>
      </div>
    )
  }
}
