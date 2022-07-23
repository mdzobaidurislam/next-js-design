import React from "react";

const Carosel = () => {
  return (
    <section className="banner__main">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="banner_section ">
              <div className="banner_bg ">
                <img src="/img/ssss.jpg" width="100%" />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="banner_content_area">
                      <div class="banner_text">
                        <h3>Sale of the season</h3>
                        <div class="banner_des">
                          <p>Best in basic tshirts and buttoms.</p>
                          <p>Get extra 5% off on first order</p>
                        </div>
                        <div class="banner_btn">
                          <button class="banner_btn">
                            Get 10% off on online payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="banner_section ">
              <div className="banner_bg ">
                <img src="/img/ssss.jpg" width="100%" />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="banner_content_area">
                      <div class="banner_text">
                        <h3>Sale of the season</h3>
                        <div class="banner_des">
                          <p>Best in basic tshirts and buttoms.</p>
                          <p>Get extra 5% off on first order</p>
                        </div>
                        <div class="banner_btn">
                          <button class="banner_btn">
                            Get 10% off on online payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="banner_section ">
              <div className="banner_bg ">
                <img src="/img/ssss.jpg" width="100%" />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="banner_content_area">
                      <div class="banner_text">
                        <h3>Sale of the season</h3>
                        <div class="banner_des">
                          <p>Best in basic tshirts and buttoms.</p>
                          <p>Get extra 5% off on first order</p>
                        </div>
                        <div class="banner_btn">
                          <button class="banner_btn">
                            Get 10% off on online payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carosel;
