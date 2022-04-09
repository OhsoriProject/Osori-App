import React from 'react';
import {Navigation1Home} from 'screens/presenter/index';
import {useRecoilState} from 'recoil';
import {testAtom} from 'store/atom/common';

const Navigation1Screen = () => {
  const [testRecoilValue, setTestRecoilValue] = useRecoilState(testAtom);
  const onPressUp = () => {
    setTestRecoilValue(p => p + 1);
  };
  const onPressDown = () => {
    setTestRecoilValue(p => p - 1);
  };
  return (
    <Navigation1Home
      testRecoilValue={testRecoilValue}
      onPressUp={onPressUp}
      onPressDown={onPressDown}
    />
  );
};

export default Navigation1Screen;
