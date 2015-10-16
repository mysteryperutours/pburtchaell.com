export default function(createStore, reducers, reducersPath) {
  return function (initialState) {
    const store = createStore(reducers, initialState);

    if (module.hot) {

      // Enable Webpack hot module replacement for reducers
      module.hot.accept(reducersPath, () => {
        const nextReducers = require(reducersPath);
        store.replaceReducer(nextReducers);
      });
    }

    return store;
  };
}
