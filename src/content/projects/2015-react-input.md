---
published: true
templateKey: project
# Release date:
# https://github.com/pburtchaell/react-input/releases/tag/2.0.2
date: '2015-06-09'
title: React Input
description: Enables effortless forms in React apps.
client: React
category: Open Source
keywords:
  - open source
  - software
  - react
path: react-input
externalLink: https://github.com/pburtchaell/react-input
externalLinkDescription: See the project on GitHub
---

---
published: false
templateKey: project
date: '2018-03-30'
title: Test
description: Test Description
client: Test Client
category: Web Design
externalLink: Test
externalLinkDescription: Test
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
