<template>
  <section class="contact section-padding sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="sec-head md-mb80">
            <h2 class="text-u ls1 d-rotate wow">
              <span class="rotate-text">Let&apos;s Contact</span>
            </h2>
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
                      <span class="text">Let&apos;s Talk</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row section-padding pb-0">
        <div class="col-lg-4">
          <div class="text-u md-mb50">
            <h6>
              REACH OUT TO US THROUGH THE CONTACT FORM BELOW, AND WE&apos;LL
              RESPOND PROMPTLY.
            </h6>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-2">
          <div class="md-mb50">
            <h6 class="mb-30 text-u ls1">Our Address</h6>
            <p>Besòs 1, 08174 Sant Cugat del Vallès, Barcelona</p>
          </div>
        </div>
        <div class="col-lg-3">
          <div>
            <h6 class="mb-30 text-u ls1">BUSINESS INQUIRIES</h6>
            <p>Support@uithemez.com</p>
            <h6 class="phone mt-10 underline main-color">
              <a href="#0">+1 840 841 25 69</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
