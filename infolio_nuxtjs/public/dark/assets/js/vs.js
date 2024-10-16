$(function () {
  var width = $(window).width();
  if (width > 991) {
    ('use strict');

    // var wind = $(window);

    /* =============================================================================
          -------------------------------  Smooth Footer   -------------------------------
          ============================================================================= */

    gsap.set('.footer-c', { yPercent: -50 });
    const uncover = gsap.timeline({ paused: true });
    uncover.to('.footer-c', { yPercent: 0, ease: 'none' });

    ScrollTrigger.create({
      trigger: 'main',
      start: 'bottom bottom',
      end: '+=50%',
      animation: uncover,
      scrub: true,
    });
  }
});
