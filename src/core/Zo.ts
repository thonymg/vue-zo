import { match } from '../utils/strings';
import { ZoOption } from './../types/typing.d';

export class Zo {
  #canPersistent = false;

  #roles: string[] = [];

  #permissions: string[] = [];

  #superRole: undefined | string = undefined;

  constructor(options: ZoOption = {}) {
    const canPersistent = options.persistent;
    const roles = canPersistent
      ? JSON.parse(localStorage.getItem('roles')!)
      : [];
    const permissions = canPersistent
      ? JSON.parse(localStorage.getItem('permissions')!)
      : [];

    this.#canPersistent = canPersistent;
    this.#roles = roles;
    this.#permissions = permissions;
    this.#superRole = options.superRole;
  }

  /*
  |-------------------------------------------------------------------------
  | Setters
  |-------------------------------------------------------------------------
  |
  | These functions controls the "permissions" and "roles" provided
  | by Vue Gates, or from a custom array.
  |
  */

  setRoles = (roles: string[]) => {
    this.#roles = roles;
    if (this.#canPersistent) {
      localStorage.setItem('roles', JSON.stringify(roles));
    }
  };

  setPermissions = (permissions: string[]) => {
    this.#permissions = permissions;
    if (this.#canPersistent) {
      localStorage.setItem('permissions', JSON.stringify(permissions));
    }
  };

  /*
  |-------------------------------------------------------------------------
  | Getters
  |-------------------------------------------------------------------------
  |
  | These functions return the "permissions" and "roles" stored.
  | This is useful when you want list all data.
  |
  */

  getRoles = () => this.#roles;

  getPermissions = () => this.#permissions;

  isSuperUser = () => this.#superRole && this.#roles.includes(this.#superRole);

  /*
  |-------------------------------------------------------------------------
  | Directives
  |-------------------------------------------------------------------------
  |
  | These is a group of functions for Vue Directives.
  | This is useful when you want valid a "permission" or "role"
  | programmatically.
  |
  */

  // Roles
  hasRole = (role: string | string[]) =>
    this.isSuperUser() || this.#roles.includes(role as string);

  unlessRole = (role: string | string[]) => !this.hasRole(role);

  hasAnyRole = (values: string) => {
    if (this.isSuperUser()) {
      return true;
    }

    const roles = values.split('|');
    return roles.some((role) => this.hasRole(role));
  };

  hasAllRoles = (values: string) => {
    if (this.isSuperUser()) {
      return true;
    }

    const roles = values.split('|');
    return roles.every((role) => this.hasRole(role));
  };

  // Permissions
  hasPermission = (permission: string | string[]) =>
    this.isSuperUser() ||
    !!this.#permissions.find((wildcard) =>
      match(permission as string, wildcard)
    );

  unlessPermission = (permission: string | string[]) =>
    !this.hasPermission(permission);

  hasAnyPermission = (values: string) => {
    if (this.isSuperUser()) {
      return true;
    }

    const permissions = values.split('|');
    return permissions.some((permission) => this.hasPermission(permission));
  };

  hasAllPermissions = (values: string) => {
    if (this.isSuperUser()) {
      return true;
    }

    const permissions = values.split('|');
    return permissions.every((permission) => this.hasPermission(permission));
  };
}
