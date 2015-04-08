var fs = require('fs');
var Handlebars = require('handlebars');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var collections = require('metalsmith-collections');
var beautify = require('metalsmith-beautify');
var permalinks  = require('metalsmith-permalinks');
var compress  = require('metalsmith-gzip');
var branch = require('metalsmith-branch');
var metallic = require('metalsmith-metallic');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

var site = Metalsmith(__dirname);

// @todo: https://github.com/christophercliff/metalsmith-webpack

site.metadata({
  site: {
    title: 'Patrick Burtchaell',
    url: 'https://pburtchaell.com'
  }
})

site.source('./content');
site.destination('./build');

/**
 * Setup collections for pages
 * and for posts.
 */
site.use(collections({
  pages: {
    pattern: 'pages/*.md'
  },
  posts: {
    pattern: 'posts/*.md',
    sortBy: 'date',
    reverse: true,
    limit: 10
  }
}));

site.use(branch()
  .pattern('/pages/*.md')
  .use(permalinks(':title/'))
);

site.use(branch()
  .pattern('/posts/*.md')
  .use(permalinks({
    pattern: ':date/:title',
    date: 'YYYY'
  }))
);

site.use(metallic()); // code highlighting
site.use(markdown()); // markdown processing
site.use(templates('handlebars')); // templates
site.use(beautify());
//site.use(compress()); // gzip file compression

site.clean();

site.build(function(error, files) {
  if (error) {
    throw error;
  } else {
    console.log('Site build complete');
  }
});
