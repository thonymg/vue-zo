# ⚔ Methods

## Set roles and permissions

This should be the first step. When you log in or start the application, you must set the roles and permissions:


### Option API
```javascript
this.$zo.setRoles(['writer']);
this.$zo.setPermissions(['posts.*', 'images.create']);

this.$zo.getRoles(); // ['writer']
this.$zo.getPermissions(); // ['posts.*', 'images.create']
```

### Setup macro 
```javascript
import { inject } from 'vue'

const $zo = inject("$zo");

$zo.setRoles(['writer']);
$zo.setPermissions(['posts.*', 'images.create']);

$zo.getRoles(); // ['writer']
$zo.getPermissions(); // ['posts.*', 'images.create']
```
 
### Pinia Store
```javascript
import { inject } from 'vue'
import { defineStore } from "pinia";

export const useAPI = defineStore("api", () => {
  let $zo: ZoTypes;
  
  const setRoles = () => {
    $zo.setRoles(['writer']);
    $zo.setPermissions(['posts.*', 'images.create']);
  }


 onMounted(() => {
    $zo = inject("$zo");
  });

  return {
    setRoles
  };
})

```
 

## Directives as functions

You can also use the custom directives as functions.

```javascript
this.$zo.hasRole('admin'); // false
this.$zo.unlessRole('admin'); // true
this.$zo.hasAnyRole('admin|writer'); // true
this.$zo.hasAllRoles('admin|writer'); // false

this.$zo.hasPermission('posts.create'); // true
this.$zo.unlessPermission('posts.create'); // false
this.$zo.hasAnyPermission('posts.create|images'); // true
this.$zo.hasAllPermissions('posts.create|images.create'); // true
```


