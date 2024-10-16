$(function () {
  var width = $(window).width();
  if (width > 991) {
    /* ===============================  scroll  =============================== */

    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.thecontainer',
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        end: () => '+=' + document.querySelector('.thecontainer').offsetWidth,
      },
    });
  }
});
