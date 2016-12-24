# Routes

The application routes are the components rendered for each route of the application.

## Route File Structure

Every route has an **`index.js`** file, which is essentially its configuration, specifying the path, the component and any hooks.

If using Redux, the **`wrapper.js`** file is the Redux connect wrapper for that route. The wrapper serves the purpose of providing state and action creators to the route and its children.

The **`styles.css`** file contains CSS rules for the route. These rules are "local," meaning they only apply to the route.

The **`component.js`** file is the actual component rendered for the route. This is a "connected" components, passing down the state and action creators to their children components.

The **`component.spec.js`** file contains the units tests for the component. These tests are run by Jest and typically us snapshots of the component. These snapshots, if they exist, are stored in the **`__snapshots__`** folder.

Optionally, there can be a **`children`** and **`support`** folder. The support folder contains any functions or data the route is dependent on. The children folder contains any of the children routes.
