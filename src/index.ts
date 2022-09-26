import { Binding, ZoVueElement } from './types/typing';

import { isConditionPassed } from './utils/validators';
import { Zo } from './core/Zo';

const registerDirectives = (app: ZoVueElement, newSyntax = false) => {
  const lifecycleName = newSyntax ? 'mounted' : 'inserted';

  const directiveOptions = (condition: string) => [
    condition,
    {
      [lifecycleName]: isConditionPassed(app, condition),
    },
  ];

  app.directive(...directiveOptions('role'));
  app.directive(...directiveOptions('permission'));
  app.directive(...directiveOptions('can')); // Alias for "v-permission"
  app.directive('role-or-permission', {
    [lifecycleName]: isConditionPassed(app, (binding: Binding) => {
      const values = binding.value.split('|');
      const role = values[0];
      const permission = values[1];

      return app.$zo.hasRole(role) || app.$zo.hasPermission(permission);
    }),
  });
};

const registerOnVue2 = (app: ZoVueElement, instance: Zo) => {
  Object.defineProperty(app.prototype, '$zo', {
    get() {
      return instance;
    },
  });
  app.$zo = instance;
  registerDirectives(app, false);
};

const registerOnVue3 = (app: ZoVueElement, instance: Zo) => {
  app.config.globalProperties.$zo = instance;
  app.$zo = instance;

  app.provide('$zo', instance);
  registerDirectives(app, true);
};

export const VueZo = {
  install(Vue: any, options = {}) {
    const isVue3 = !!Vue.config.globalProperties;
    const zo = new Zo(options);

    if (isVue3) {
      registerOnVue3(Vue, zo);
    } else {
      registerOnVue2(Vue, zo);
    }
  },
};
