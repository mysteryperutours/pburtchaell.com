import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import AdminHandler from './views/admin';
import IndexHandler from './views/index';
import AboutHandler from './views/about';
import DesignHandler from './views/design';
import DevHandler from './views/development';
import PhotosHandler from './views/photos';
import WritingHandler from './views/writing';

export default (
  <Route name="app" handler={IndexHandler} path="/">
    <Route name="home" path="/" handler={AboutHandler} />
    <Route name="about" path="/about" handler={AboutHandler} />
    <Route name="admin" path="/admin" handler={AdminHandler} />
    <Route name="design" path="/design" handler={DesignHandler} />
    <Route name="development" path="/development" handler={DevHandler} />
    <Route name="photos" path="/photos" handler={PhotosHandler} />
    <Route name="writing" path="/writing" handler={WritingHandler} />
  </Route>
);
