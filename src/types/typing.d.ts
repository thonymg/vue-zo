/* eslint-disable @typescript-eslint/ban-types */
import { Zo } from '../core/Zo';

export type Option = {
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
