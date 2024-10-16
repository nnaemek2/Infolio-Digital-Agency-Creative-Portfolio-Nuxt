<template>
  <div class="contact section-padding bord-thin-top" data-scroll-index="6">
    <div class="sec-head mb-50">
      <h3>Get <span class="fw-200">In Touch</span></h3>
    </div>
    <div class="contact-form">
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
                class="butn butn-md butn-bord full-width text-center radius-10"
              >
                <span class="fz-18 text-u ls1">Let&apos;s Talk</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
