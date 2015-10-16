import React from 'react';
import { Router } from 'react-router';

export default function renderRoutes(history) {
  return (
    <Router
      routes={require('./routes')}
      history={history()}
    />
  );
}
