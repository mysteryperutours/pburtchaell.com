

/**
 * createHeader
 * @param {string} - 'description'
 */
function createHeader (description) {
  var date = moment(new Date()).toDate(),
      version = ' - v<%=pkg.version%> - ', // get the version number from package.json
      name = '/*! <%=pkg.name%>'; // get the name from package.json
  if (description) {
    return name + ' - ' + description + version + date + '*/ ';
  } else {
    return name + version + date + '*/ ';
  }
};