function checkIfAnalyticsLoaded() {
  return new Promise((resolve, reject) => {
    const isLoaded = () => {
      const timeStart = Date.now();
      const TIMEOUT = 3000;

      if (Date.now() - timeStart > TIMEOUT) {
        reject('Google analytics not injected!');
      }

      if (window.ga && ga.create) {
        resolve();
      } else {
        setTimeout(isLoaded, 500);
      }
    };

    isLoaded();
  });
}

export default checkIfAnalyticsLoaded;
