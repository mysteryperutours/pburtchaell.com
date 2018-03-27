---
published: true
templateKey: project
title: React Input
description: Enables effortless forms in React apps.
question:
keywords:
  - open source
  - software
  - react
category: Open Source
client: React
type: project
path: react-input
# Release date:
# https://github.com/pburtchaell/react-input/releases/tag/2.0.2
date: 2015-06-09
externalLink: https://github.com/pburtchaell/react-input
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
