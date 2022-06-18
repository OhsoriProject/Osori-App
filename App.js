/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import {
  NavigationContainer,
  StackActions,
  useNavigationContainerRef,
} from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { RecoilRoot, useRecoilState } from "recoil";
import RecoilNexus, { getRecoil } from "recoil-nexus";
import { UserIdAtom } from "store/atom/auth";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const navigationRef = useNavigationContainerRef();

  const [user, setUser] = useRecoilState(UserIdAtom);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // useEffect(() => {
  //   setUser({
  //     id: null,
  //     nickname: null,
  //   });
  // }, []);

  useEffect(() => {
    if (!user.id) {
      navigationRef.current.dispatch(StackActions.replace("LoginNavigation"));
    }
  }, [user]);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
