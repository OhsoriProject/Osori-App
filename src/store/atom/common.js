import {atom} from 'recoil';
import {persistAtom} from './persist';

export const testAtom = atom({
  key: 'testAtom',
  default: 1,
  effects_UNSTABLE: [persistAtom('testAtom')],
});
