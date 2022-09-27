# 👌 Install in Vue 3

In your script entry point:

**Add plugin:**

```typescript
import { createApp } from 'vue'
import { VueZo, ZoOption } from 'vue-zo'
import App from './App.vue'


declare class VueZo {
  static install: (app: any, options?: ZoOption) => void;
}

createApp(App)
  .use(VueZo)
  .mount('#app')
```

# 🤟 Install in Vue 2

In your script entry point:

**Add plugin:**

```javascript
import Vue from 'vue';
import {VueZo }from 'vue-zo';

Vue.use(VueZo);
```

*That's all!*
