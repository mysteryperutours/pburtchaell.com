module.exports = function () {
  return { 
    InternalError: function (msg, callback) {
      throw new Error(msg);
    },
    ExternalError: function (msg, callback) {
      throw new Error(msg);
    }
  }
}