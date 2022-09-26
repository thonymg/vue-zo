# 👮‍♀️ Middlewares

Based in the [official Nuxt documentation](https://nuxtjs.org/api/pages-middleware/).

## Named middleware

You can create named middleware by creating a file inside the `middleware/` directory, the file name will be the middleware name:

`middleware/admin.js`:
```javascript
export default function ({ $zo, redirect }) {
  // If the user is not an admin
  if (!$zo.hasRole('admin')) {
    return redirect('/login')
  }
}
```

`pages/secret.vue`:
```vue
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware: 'admin'
  }
</script>
```

## Anonymous middleware

If you need to use a middleware only for a specific page, you can directly use a function for it (or an array of functions):

`pages/secret.vue`:
```vue
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware({ $zo, redirect }) {
      // If the user is not an admin
      if (!$zo.hasRole('admin')) {
        return redirect('/login')
      }
    }
  }
</script>
```
