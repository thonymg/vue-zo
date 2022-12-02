# 📐 Install in Nuxt.js

#### Nuxt 2
In your Nuxt2 project:

**1. Create plugin:**

`~/plugins/vue-zo.js`:
```javascript
import Vue from 'vue'
import {VueZo} from 'vue-zo'

Vue.use(VueZo);

export default (_context, inject) => {
  inject('zo', Vue.prototype.$zo);
}
```

**2. Then register it:**

`nuxt.config.js`:
```javascript
export default {
  plugins: [
    '~/plugins/vue-zo'
  ]
}
```

#### Nuxt3
**1. Create plugin:**

`~/plugins/vue-zo.js`:
```javascript
import { VueZo } from "vue-zo";

export default defineNuxtPlugin((nuxtApp) => {
  const { $zo } = nuxtApp.vueApp.use(VueZo, {});

  return {
    provide: { zo: $zo },
  };
});

```

**2. Then use it:**

`nuxt.config.js`:
```javascript

const { $zo } = useNuxtApp();

$zo.setRoles(['writer']);

$zo.getRoles();
```
