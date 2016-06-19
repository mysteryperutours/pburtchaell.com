var path = require('path');
var express = require('express');

var port = process.env.PORT || process.env.npm_package_config_DEVELOPMENT_PORT;
var host = process.env.HOST || process.env.npm_package_config_DEVELOPMENT_HOST;

var app = express();

app.use(require('morgan')('short'));

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var config = Object.create(require('./webpack.conf.development'));
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use('/', express.static(path.join(__dirname, '__webpack')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '__webpack', 'index.html'));
});

app.listen(port, host, function (error) {
  if (error) throw error;

  console.log('server running at http://%s:%d', host, port);
})
