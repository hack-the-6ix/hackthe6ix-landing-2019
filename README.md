# Hack the 6ix

## Statuses

| Environment | Status |
| --- | --- |
| **Production** | ![Production deploy CI](https://github.com/hack-the-6ix/hackthe6ix/workflows/Production%20deploy%20CI/badge.svg) |
| **Development** | [![Netlify Status](https://api.netlify.com/api/v1/badges/e68a418d-7653-488c-8a81-570515f89439/deploy-status)](https://app.netlify.com/sites/ht6-dev/deploys) |

### 

## File structure

### /assets
 - Contains all the static assets for page.
### /components
 - Contains all reuseable components such as navigation, footer, buttons.
### /layouts
 - Contains all the layouts for setting the various reusable components that wrap pages.
### /pages
 - Contains the various pages of the application.
 - index.js acts as the routes object for vue-router
### /styles
 - Global styles, variables, and mixins for the entire application.


## Commands

### Project setup
```
npm ci
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
