/* eslint-disable @typescript-eslint/ban-types */
import { Zo } from '../core/Zo';

export type ZoTypes = {
  getPermissions: Function;
  getRoles: Function;
  hasAllPermissions: Function;
  hasAllRoles: Function;
  hasAnyPermission: Function;
  hasAnyRole: Function;
  hasPermission: Function;
  hasRole: Function;
  isSuperUser: Function;
  setPermissions: Function;
  setRoles: Function;
  unlessPermission: Function;
  unlessRole: Function;
};

export type ZoOption = {
  persistent?: boolean | undefined;
  superRole?: string | undefined;
};

export type Binding = {
  name: string;
  arg: string;
  value: string;
  modifiers: string;
};

export interface ZoVueElement {
  $zo: Zo;
  directive: Function;
  config: any;
  provide: any;
  prototype: any;
}
