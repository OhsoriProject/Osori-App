import {selector} from 'recoil';
import {testAtom} from 'store/atom/common';

export const testSelector = selector({
  key: 'testSelector',
  get: ({get}) => {
    const fontSize = get(testAtom);

    return `${fontSize} test selector`;
  },
});
