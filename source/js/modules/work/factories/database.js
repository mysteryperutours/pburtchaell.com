/** 
 * 
 */
module.exports = function ($rootScope, $http, $handle) {
  return {

    /**
     * @function error
     */
    error: function (message, options, callback) {
      // @TODO
    },

    /**56
     * @function get
     * @param url
     * @param options
     * @param callback 
     * @returns data
     * @description 
     */
    get: function (url, options, callback) {

      $rootScope.reset = true;

      /** 
       * Make sure localStorage is supported. If it isn't, warn the user.
       */
      if (window.localStorage) {
        // Create a base options object.
        options = {
          root: options.root || 'https://pburtchaell-work.firebaseio.com/',
          ext: options.ext || '.json',
          save: options.save || true,
          path: url || $handle.InternalError('You must define a url for the database.')
        };
        
        // The constructed url to be used in the request.
        var url = options.root + options.path + options.ext;
        
        return $http({
          method: 'GET', 
          url: url 
        })
        .success(function (data, status) {

          /**
           * If specified as true in the request's options,
           * save the data to localStorage for future usage.
           */
          if (options.save !== false) {
            localStorage['projects'] = JSON.stringify(data);
          }
          
          callback();
        })
        .error(function (data, status) {  
          return;
        });  
      } else {
        browser.warn('localStorage');
      }
    },

    /**
     * @function post
     * @param url
     */
    post: function (url) {
      return $http.post(url);
    }
  }
};
