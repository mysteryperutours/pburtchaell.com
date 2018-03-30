---
published: true
templateKey: project
# Release Date:
# https://github.com/pburtchaell/redux-promise-middleware/releases/tag/0.0.0
date: '2015-06-12'
title: Redux Promise Middleware
description: Enables handling of Promises in apps built with Redux.
client: Redux
category: Open Source
keywords:
  - open source
  - software
  - redux
path: redux-promise-middleware
externalLink: https://github.com/pburtchaell/redux-promise-middleware
externalLinkDescription: See the project on GitHub
---
This project was developed in 2015 to solve a common problem with applications built with Redux. When the app makes a network request or some other async action, it's necessary to update the state when the request starts and when the request settles.

To do this, developers use Promises. Promises are a special object type in JavaScript that have a pending state and a settled state.

```js
new Promise((resolve, reject) => {
  // Do something that requires some time
  if (done) {
    resolve()
  } else if (error) {
    reject()
  }
}).then(() => {
  // Do something when the promise is settled
})
```

Above, a promise fires the "resolve" method when it is done or fires the "reject" method if there is an error. When either of those metods is fired, the "then" callback is fired with the promise state.

## The Problem

When a developer uses promises with a Redux app, they need a way to update the  state when the promise is pending and update the state again when the promise is settled.

That's where Redux Promise middleware comes in.

## The Solution

With the middleware included in a Redux app, developers can dispatch an action with a promise as the payload and the middlware will "split" that action into two subsequent actions.

```js
const secondAction = (data) => ({
  type: 'SECOND_ACTION',
  payload: data,
})

const firstAction = () => {
  return (dispatch) => {
    const response = dispatch({
      type: 'FIRST_ACTION',
      payload: Promise.resolve(),
    })

    response.then((data) => {
      dispatch(secondAction(data))
    })
  }
}
```
