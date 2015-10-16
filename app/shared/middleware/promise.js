import isPromise from './utils/isPromise';
import getTypes from './utils/getTypes';

/**
 * @function promiseMiddleware
 * @description Redux middleware for handling promises. When this middleware is
 * used with a promise, it will dispatch two actions: first a pending action
 * and second, either a rejected or fulfilled action. Additionally, it will
 * dispatch onSuccess/onError callback functions if they are used.
 */
export default function promiseMiddleware() {
  return next => action => {

    /**
     * If the action does not have a promise, then
     * do not use the middleware.
     */
    if (!action.payload.promise || !isPromise(action.payload.promise)) {
      return next(action);
    }

    const { promise, data, onSuccess, onError } = action.payload;
    const types = getTypes(action.type);

    /**
     * @function handleRejected
     * @description If the promise is rejected, then fire
     * the error callback and the dispatch the rejected action.
     */
    let handleRejected = (error) => {
      if (onError) onError(error);

      return next({
        type: types.rejected,
        payload: error,
        error: true,
        meta: action.meta
      });
    }

    /**
     * @function handleFulfilled
     * @description If the promise is fulfilled, then fire
     * the success callback and the dispatch the fulfilled action.
     */
    let handleFulfilled = function (response) {
      if (onSuccess) onSuccess(response);

      return next({
        type: types.fulfilled,
        payload: response,
        error: false,
        meta: action.meta
      })
    };

    /**
     * Dispatch the initial "pending" action. This tells the
     * reducer(s) that an async action has been dispatched.
     * The payload should include the data from the action
     * so that we can do optimistic updates as needed.
     */
    next({
      type: types.pending,
      payload: data,
      meta: action.meta
    });

    return promise.then(handleFulfilled, handleRejected);
  };
}
