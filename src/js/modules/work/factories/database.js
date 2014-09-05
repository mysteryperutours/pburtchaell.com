/** 
 * 
 */
module.exports = function ($rootScope, $http) {
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

      // Create a base options object.
      var options = {
        root: options.root || 'https://pburtchaell-work.firebaseio.com/',
        ext: options.ext || '.json',
        save: options.save || false,
        path: url || handle.InternalError('You must define a url for the database.')
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
        if (options.save != false) {
          localStorage['projects'] = data;
        }

        // Return the data object/array for use.
        return data;
      })
      .error(function (data, status) {  
        return;
      }); 

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
