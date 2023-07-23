import React from "react";

function About() {
  return (
    <>
      <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
          <div class="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                About us
              </li>
            </ol>
          </div>
        </nav>
        <div class="container">
          <div
            class="page-header page-header-big text-center"
            style={{
              backgroundImage: "url('assets/images/about-header-bg.jpg')",
            }}
          >
            <h1 class="page-title text-white">
              About us<span class="text-white">Who we are</span>
            </h1>
          </div>
        </div>

        <div class="page-content pb-0">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 mb-3 mb-lg-0">
                <h2 class="title">Our Vision</h2>
                <p>
                  At Molla, we believe that fashion is a reflection
                  of individuality and style. We are your one-stop destination for trendy
                  and stylish clothing for both men and women and Kids .{" "}
                </p>
              </div>

              <div class="col-lg-6">
                <h2 class="title">Our Mission</h2>
                <p>
                  Our mission is to empower our customers to express
                  themselves through fashion, by offering a diverse range
                  of clothing that caters to all tastes and preferences.
                  We strive to provide the latest fashion trends and timeless
                  classics,ensuring that everyone finds something they love.{" "}
                </p>
              </div>
            </div>

            <div class="mb-5"></div>
          </div>

          <div class="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
            <div class="container">
              <div class="row">
                <div class="col-lg-5 mb-3 mb-lg-0">
                  <h2 class="title">Who We Are</h2>
                  <p class="lead text-primary mb-3">
                    Welcome to Molla – where creativity knows no bounds! We are not just an ordinary eCommerce store;
                    we are a vibrant and imaginative team on a mission to redefine shopping for men, women, and kids.
                    Get ready to embark on a thrilling journey of fashion, style, and self-expression like never before.
                  </p>
                  <p class="mb-2">
                    Step into a realm of endless possibilities, as we curate a handpicked
                    selection of extraordinary clothing and accessories that celebrate diversity
                    and individuality.Our mission is to unleash the power of imagination through
                    fashion and bring you a collection that sparks inspiration and ignites your
                    passion for self-expression.{" "}
                  </p>

                  <a
                    href="blog.html"
                    class="btn btn-sm btn-minwidth btn-outline-primary-2"
                  >
                    <span>VIEW OUR NEWS</span>
                    <i class="icon-long-arrow-right"></i>
                  </a>
                </div>

                <div class="col-lg-6 offset-lg-1">
                  <div class="about-images">
                    <img
                      src="assets/images/about/img-1.jpg"
                      alt=""
                      class="about-img-front"
                    />
                    <img
                      src="assets/images/about/img-2.jpg"
                      alt=""
                      class="about-img-back"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-lg-5">
                <div class="brands-text">
                  <h2 class="title">
                    The world's premium design brands in one destination.
                  </h2>
                  <p>
                    Molla is not just a store; it's a playground of style 
                    possibilities.Whether you're stepping into a corporate 
                    boardroom, dancing under city lights, or making magical 
                    childhood memories, we have the perfect ensemble to accompany 
                    you on your journey.
                  </p>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="brands-display">
                  <div class="row justify-content-center">
                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/1.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/2.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/3.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/4.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/5.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/6.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/7.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/8.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>

                    <div class="col-6 col-sm-4">
                      <a href="#" class="brand">
                        <img
                          src="assets/images/brands/9.png"
                          alt="Brand Name"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="mt-4 mb-6" />

            <h2 class="title text-center mb-4">Meet Our Team</h2>

            <div class="row">
              <div class="col-md-4">
                <div class="member member-anim text-center">
                  <figure class="member-media">
                    <img
                      src="assets/images/team/member-4.jpeg"
                      alt="member photo"
                    />

                    <figcaption class="member-overlay">
                      <div class="member-overlay-content">
                        <h3 class="member-title">
                          SUVA DULEY<span>Founder & CEO</span>
                        </h3>
                        <p>
                          Full stack developer & Open source Contributor
                        </p>
                        <div class="social-icons social-icons-simple">
                          <a
                            href="https://m.facebook.com/profile.php?eav=AfYzDtGDSr751YOPZ7qfq6DUOUK2T9MSZXbfg8294eDSx9NMrOSYeagw2VJtFCCfQl8&paipv=0"
                            class="social-icon"
                            title="Facebook"
                            target="_blank"
                          >
                            <i class="icon-facebook-f"></i>
                          </a>
                          <a
                            href="https://twitter.com/DuleySuva"
                            class="social-icon"
                            title="Twitter"
                            target="_blank"
                          >
                            <i class="icon-twitter"></i>
                          </a>
                          <a
                            href="https://www.instagram.com/subha000111/"
                            class="social-icon"
                            title="Instagram"
                            target="_blank"
                          >
                            <i class="icon-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <div class="member-content">
                    <h3 class="member-title">
                      @SUVA DULEY<span>Founder & CEO1</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="member member-anim text-center">
                  <figure class="member-media">
                    <img
                      height={200}
                      src="assets/images/team/member-7.jpeg"
                      alt="member photo"
                    />

                    <figcaption class="member-overlay">
                      <div class="member-overlay-content">
                        <h3 class="member-title">
                          MD ASHIF<span>Founder & CEO2</span>
                        </h3>
                        <p>
                         Full Stack developer & Problem solver
                        </p>
                        <div class="social-icons social-icons-simple">
                          <a
                            href="#"
                            class="social-icon"
                            title="Facebook"
                            target="_blank"
                          >
                            <i class="icon-facebook-f"></i>
                          </a>
                          <a
                            href="#"
                            class="social-icon"
                            title="Twitter"
                            target="_blank"
                          >
                            <i class="icon-twitter"></i>
                          </a>
                          <a
                            href="#"
                            class="social-icon"
                            title="Instagram"
                            target="_blank"
                          >
                            <i class="icon-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <div class="member-content">
                    <h3 class="member-title">
                    @MD ASHIF<span>Founder & CEO3</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="member member-anim text-center">
                  <figure class="member-media">
                    <img
                      src="assets/images/team/member-8.jpeg"
                      alt="member photo"
                    />

                    <figcaption class="member-overlay">
                      <div class="member-overlay-content">
                        <h3 class="member-title">
                        Chirasree<span>Product Manager</span>
                        </h3>
                        <p>
                          Molla is not just a store; it's a playground of style possibilities.
                          Whether you're stepping into a corporate boardroom, dancing under city
                          lights, or making magical childhood memories, we have the perfect ensemble
                          to accompany you on your journey.
                        </p>
                        <div class="social-icons social-icons-simple">
                          <a
                            href="https://www.facebook.com/chirasree.sur?mibextid=ZbWKwL"
                            class="social-icon"
                            title="Facebook"
                            target="_blank"
                          >
                            <i class="icon-facebook-f"></i>
                          </a>
                          <a
                            href="#"
                            class="social-icon"
                            title="Twitter"
                            target="_blank"
                          >
                            <i class="icon-twitter"></i>
                          </a>
                          <a
                            href="#"
                            class="social-icon"
                            title="Instagram"
                            target="_blank"
                          >
                            <i class="icon-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <div class="member-content">
                    <h3 class="member-title">
                    Chirasree<span>Founder & CEO3</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-2"></div>

          <div class="about-testimonials bg-light-2 pt-6 pb-6">
            <div class="container">
              <h2 class="title text-center mb-3">What Customer Say About Us</h2>

              <div
                class="owl-carousel owl-simple owl-testimonials-photo"
                data-toggle="owl"
                data-owl-options='{
                     "nav": false, 
                     "dots": true,
                     "margin": 20,
                     "loop": false,
                     "responsive": {
                         "1200": {
                             "nav": true
                         }
                     }
                 }'
              >
                <blockquote class="testimonial text-center">
                  <img src="assets/images/testimonials/user-1.jpg" alt="user" />
                  <p>
                    "Wow! I can't express how thrilled I am with my recent purchase from Molla.
                    The dress I bought was exactly as described, and the fit is just perfect.
                    I received so many compliments at the party, and I felt like a fashion diva.
                    Thank you, Molla, for making me feel so confident and stylish!" - Sarah L.
                  </p>
                  <cite>
                    Sarah L
                    <span>Customer</span>
                  </cite>
                </blockquote>

                <blockquote class="testimonial text-center">
                  <img src="assets/images/testimonials/user-2.jpg" alt="user" />
                  <p>
                    "Finally, an eCommerce platform that gets it right! I love Molla's commitment to inclusivity and diversity in their fashion collection.
                    As a plus-size woman, it's often hard to find stylish and trendy clothing that fits well.
                    But Molla has a fantastic range of options that flatter my curves beautifully.
                    I'm officially hooked!" - Emma R.
                  </p>

                  <cite>
                    Emma R
                    <span>Customer</span>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
