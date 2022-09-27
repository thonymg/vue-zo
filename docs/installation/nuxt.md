# 📐 Install in Nuxt.js

#### Nuxt 2
In your Nuxt2 project:

**1. Create plugin:**

`~/plugins/vue-zo.js`:
```javascript
import Vue from 'vue'
import VueGates from 'vue-zo'

Vue.use(VueGates);

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

#### Nuxt3 (comming soon)
