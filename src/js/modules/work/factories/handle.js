module.exports = function () {
  return { 
    InternalError: function (msg, callback) {
      throw new Error(msg);
      callback();
    },
    ExternalError: function (msg, callback) {
      throw new Error(msg);
      callback();
    }
  }
}