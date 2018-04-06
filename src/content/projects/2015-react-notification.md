---
published: true
featured: true
templateKey: project
date: '2015-03-21'
title: React Notification
description: 'Snackbar notifications for React, styled with Material Design.'
client: React
collaborators:
path: react-notification
category: Open Source
keywords:
  - open source
  - software
  - react
  - material
  - design
  - standards
externalLink: 'https://github.com/pburtchaell/react-notification'
externalLinkDescription: See the project on GitHub
---
This library enables developers to implement snackbar notifications in  React web applications. Snackbar notifications, a common pattern in Material Design, are used to display text notifications. According to [the official specification from Google](https://material.io/guidelines/components/snackbars-toasts.html), snackbars contain "a single line of text directly related to the operation performed."

With this library, developers can either display a single notification or a stack of multiple notifications. For both, enter and exit animations are handled by the component.

## Notification Component

As a pure component, the single notification doesn't have state. This requires the developer to manage the state of the component.

```js
 <Notification
  isActive={this.state.isActive}
  message="Here's a notification for you"
  action="Dismiss"
  onDismiss={() => this.setState({isActive: false})
  onClick={() =>  this.setState({isActive: false})}
/>
```

The notification is dismissed either when the user clicks on the action or when the notification times out.

## Notification Stack Component

Unlike the notification component, the notification stack does maintain a state. This is required for the component to know how many notifications are displayed and to properly handle the enter and exit animations for each notification.

This is an example of how the component works with a library like Immutable.

```js
<NotificationStack
  notifications={this.state.notifications.toArray()}
  onDismiss={(dismissedNotification) => {
    this.setState({
      notifications: this.state.notifications.delete(dismissedNotification)
    })
  }}
/>
```
