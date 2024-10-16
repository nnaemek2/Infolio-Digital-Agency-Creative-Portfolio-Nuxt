export default function isInView(options) {
  if (!options.selector || !options.callback) return;

  if (options.isElements) {
    document.querySelectorAll(options.selector).forEach(element => {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) options.callback(entries[0].target);
        else {
          if (options.whenOutOfView) options.whenOutOfView(entries[0].target)
        }
      }).observe(element);
    })
  } else {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) options.callback(entries[0].target);
      else {
        if (options.whenOutOfView) options.whenOutOfView(entries[0].target)
      }
    }).observe(document.querySelector(options.selector));
  }
}