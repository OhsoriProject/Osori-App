import {AsyncStorage} from 'react-native';
import {atom, AtomEffect, DefaultValue} from 'recoil';

export function persistAtom(key) {
  return ({setSelf, onSet}) => {
    setSelf(
      AsyncStorage.getItem(key).then(
        savedValue =>
          savedValue != null ? JSON.parse(savedValue) : new DefaultValue(), // Abort initialization if no value was stored
      ),
    );

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };
}
