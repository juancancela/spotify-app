/* eslint-disable global-require */

const routes = {
  path: '/',
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'search' */ './search'),
    },
    {
      path: '/search',
      load: () => import(/* webpackChunkName: 'search' */ './search'),
    },
    {
      path: '/favorites',
      load: () => import(/* webpackChunkName: 'favorites' */ './favorites'),
    },
    {
      path: '*',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    const route = await next();
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route
  },
};

if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  })
}

export default routes
