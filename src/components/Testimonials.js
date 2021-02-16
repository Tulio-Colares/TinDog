import React, { Component } from 'react'

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <section class="colored-section" id="testimonials">

        <div id="testimonial-carousel" class="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2 className="testimonial-text">Eu não tenho mais que farejar por aí outros cachorros em busca de amor. Achei uma Corgi no TinDog que é a mais gatinha! Woof.</h2>
              <img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile" />
              <em>Tito, São Paulo</em>
            </div>

            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">Meu cãozinho costumava estar sempre tão solitário, mas com a ajuda do Tindog, ele encontrou o amor da vida dele! Eu acho.</h2>
              <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile" />
              <em>Mariana, Fortaleza</em>
            </div>

          </div>
          <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon"></span>
          </a>
        </div>

        </section>
      </div>
    )
  }
}
