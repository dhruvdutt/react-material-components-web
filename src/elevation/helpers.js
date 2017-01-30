/* @flow */
import type {ZSpace} from './types';
import {BASE_CLASS_NAME} from './constants';

export function classNameForZSpace (zSpace: ZSpace): string {
  if (zSpace < 0 || zSpace > 24) {
    throw new TypeError('z-space should be a number between 0-24');
  }
  return `${BASE_CLASS_NAME}--z${zSpace}`;
}
