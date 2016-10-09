export default {
  path: '/',
  children: [
    require('./home').default,
    //require('./about').default,
    //require('./error').default
  ],
  async action({ next }) {
    let route;

    do {
      route = await next();
    } while (!route);

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - LOL`;
    route.description = route.description || '';

    return route;
  }
};
