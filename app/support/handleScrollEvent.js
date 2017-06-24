// @flow

function handleScrollEvent(callback) {
  let ticking;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      callback();

      ticking = false;
    });
  }

  ticking = true;

  return ticking;
}

export default handleScrollEvent;
