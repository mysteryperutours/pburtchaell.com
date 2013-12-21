# Tasklist for the Project

1) Install Pretty, add code to gruntfil.js:

`npm install pretty`, then add the following config to apply formatting to any generated HTML:

```js
options: {
  postprocess: require('pretty')
}
```

2)