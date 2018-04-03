---
published: false
featured: false
templateKey: project
date: '2015-06-09'
title: React Input
description: Simple forms in React.
client: React
path: react-input
category: Open Source
keywords:
  - open source
  - software
  - react
externalLink: 'https://github.com/pburtchaell/react-input'
externalLinkDescription: See the project on GitHub
---
```js
<Form
  fields={[
    {
      name: 'Email',
      key: 'email',
      type: 'email',
      error: false,
      required: false,
      placeholder: 'Enter an email',
      onChange: value => {
        // handle a changed value on the input
      },
      renderAfter: () => (
        <div>Include an element after the input</div>
      ),
      renderBefore: () => (
        <div>Include an element before the input</div>
      )
    },
    // additional inputs to include in the form
  ]}
  onChange={state => /* handle form change */ }
  onSubmit={state => /* handle form submit */ }
/>
```
