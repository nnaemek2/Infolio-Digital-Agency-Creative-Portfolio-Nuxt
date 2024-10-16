<template>
  <section
    class="contact-crev section-padding bord-thin-bottom bord-thin-top"
    data-scroll-index="6"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="sec-head md-mb80">
            <h6 class="sub-title main-color mb-15 wow fadeInUp">
              Get In Touch
            </h6>
            <h2 class="text-u ls1 d-rotate wow">
              <span class="rotate-text"
                >Let's make your brand
                <span class="fw-200">brilliant!</span></span
              >
            </h2>
            <p class="mt-10">
              If you would like to work with us or just want to get in touch,
              we’d love to hear from you!
            </p>
            <div class="phone fz-30 fw-600 mt-80 underline main-color">
              <a href="#0">+1 840 841 25 69</a>
            </div>
            <ul class="rest social-text d-flex mt-40">
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">Facebook</span>
                </a>
              </li>
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">Twitter</span>
                </a>
              </li>
              <li class="mr-30">
                <a href="#0" class="hover-this">
                  <span class="hover-anim">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#0" class="hover-this">
                  <span class="hover-anim">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="full-width">
            <form id="contact-form" method="post" action="contact.php">
              <div class="messages"></div>

              <div class="controls row">
                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group mb-30">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div class="mt-30">
                    <button
                      type="submit"
                      class="butn butn-full butn-bord radius-30"
                    >
                      <span class="text">Let&#39;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
