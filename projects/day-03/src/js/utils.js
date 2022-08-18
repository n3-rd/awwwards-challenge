// Linear Interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePosition = (e) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

// Preload Assets
const preloadFonts = (id) => {
  return new Promise((resolve, reject) => {
    webFont.load({
      typekit: {
        id: id,
      },
      active: resolve,
    });
  });
};

export { lerp, getMousePosition, preloadFonts };
