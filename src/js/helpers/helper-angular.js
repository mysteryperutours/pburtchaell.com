/**
 * Handlebars Helper: {{angular}}
 * Copyright (c) 2014 Patrick Burtchaell, contributors.
 * Licensed under the MIT License (MIT).
 */

module.exports.register = function(Handlebars, options) {

  Handlebars.registerHelper('angular', function(a) {

      return new Handlebars.SafeString('{{' + a + '}}');

  });

};
