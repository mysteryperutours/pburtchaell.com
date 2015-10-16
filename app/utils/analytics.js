// Create a queue, but don't obliterate an existing one!
window.analytics = window.analytics || [];

// A list of the methods in Analytics.js to stub.
window.analytics.methods = [
  'identify',
  'group',
  'track',
  'page',
  'pageview',
  'alias',
  'ready',
  'on',
  'once',
  'off',
  'trackLink',
  'trackForm',
  'trackClick',
  'trackSubmit'
];

/**
 * Define a factory to create stubs. These are placeholders
 * for methods in Analytics.js so that you never have to wait
 * for it to load to actually record data. The `method` is
 * stored as the first argument, so we can replay the data.
 */
window.analytics.factory = function (method) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(method);
    window.analytics.push(args);

    if (document.location.hostname === 'localhost' || document.location.hostname === 'segment.codes') {
      var eventName = args[1];

      console.log('Analytics:', method, eventName);
    }

    return window.analytics;
  };
};

// For each of our methods, generate a queueing stub.
for (var i = 0; i < window.analytics.methods.length; i++) {
  var key = window.analytics.methods[i];
  window.analytics[key] = window.analytics.factory(key);
}

/**
 * Define a method to load Analytics.js from our CDN,
 * and that will be sure to only ever load it once.
 */
window.analytics.load = function (key) {
  if (document.getElementById('analytics-js')) return;

  // Create an async script element based on your key.
  var script = document.createElement('script');

  script.type = 'text/javascript';
  script.id = 'analytics-js';
  script.async = true;
  script.src = ('https:' === document.location.protocol
    ? 'https://' : 'http://')
    + 'cdn.segment.com/analytics.js/v1/'
    + key + '/analytics.min.js';

  var head = document.getElementsByTagName('head')[0];

  head.appendChild(script);
};

// Add a version to keep track of what's in the wild.
window.analytics.SNIPPET_VERSION = 'v1';

export default window.analytics;
