var fs = require('fs');
var Handlebars = require('handlebars');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var inPlace = require('metalsmith-in-place');
var collections = require('metalsmith-collections');
var beautify = require('metalsmith-beautify');
var permalinks  = require('metalsmith-permalinks');
var compress  = require('metalsmith-gzip');
var branch = require('metalsmith-branch');
var metallic = require('metalsmith-metallic');
var lunr = require('metalsmith-lunr');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

var site = Metalsmith(__dirname);

// @todo: https://github.com/christophercliff/metalsmith-webpack

site.metadata({
  site: {
    title: 'Patrick Burtchaell',
    url: 'https://pburtchaell.com',
    description: '',
    keywords: ''
  }
})

site.source('./content');
site.destination('./build');

site.clean();

/**
 * Setup collections for pages and for posts. Posts can be sorted by date and the collection has a limit of the 10 most recent posts.
 */
site.use(collections({
  pages: {
    pattern: 'pages/*.{hbs,md}'
  },
  posts: {
    pattern: 'posts/*.md',
    sortBy: 'date',
    reverse: true,
    limit: 10
  }
}));

// Configure "pages" branch
site.use(branch()
  .pattern('/pages/*.{hbs,md}')
  .use(permalinks(':title/'))
);

// Configure "posts" branch
site.use(branch()
  .pattern('/posts/*.md')
  .use(permalinks({
    pattern: ':date/:title',
    date: 'YYYY'
  }))
);

/**
 * Configure plugins:
 * - Metallic: code highlighting
 * - Markdown: Markdown processing
 * - Templates: Handlebars templates
 * - Beautify: cleans up HTML spacing
 * - Compress: gzip file compression (for S3)
 * - Lunr: static site search
 */
site.use(metallic());
site.use(markdown());
site.use(layouts({
  engine: 'handlebars',
  'default': 'base.hbt',
  directory: 'templates'
}));
site.use(inPlace({
  engine: 'handlebars',
  pattern: 'pages/**/*.hbt'
}))
site.use(beautify());
site.use(compress());
site.use(lunr({
  ref: 'title',
  indexPath: 'index.json'
}));

// Build the site
site.build(function(error, files) {
  if (error) {
    throw error;
  } else {
    console.log('Site build complete');
  }
});
