const imagesLoaded = require("imagesloaded");

export const lerp = (a, b, n) => (1 - n) * a + n * b;

/**
 * Preload Images
 * @param {String} selector - Selector/scope from where images need
 */

export const preloadImages = (selector = "img") => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve,
    );
  });
};
