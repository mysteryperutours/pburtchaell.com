/*
 * Coming from Services to Factories should be simple now, we could create an Object Literal inside a Factory or simply provide some more in-depth methods:
 */
module.exports = function ($http) {

  return {
    get: function(url) {
      return $http.get(url);
    },
    post: function(url) {
      return $http.post(url);
    }
  };

};
