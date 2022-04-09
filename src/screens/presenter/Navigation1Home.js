import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Navigation1Home = props => {
  const {testRecoilValue, onPressUp, onPressDown} = props;
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World Navigation1</Text>
      </View>
      <View>
        <Text>{testRecoilValue}</Text>
      </View>
      <TouchableOpacity onPress={onPressUp}>
        <Text>UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDown}>
        <Text>DOWN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navigation1Home;
