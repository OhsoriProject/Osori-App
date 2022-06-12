/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <RecoilRoot>
      <RecoilNexus />
      <React.Suspense
        fallback={
          <View>
            <Text>Loading</Text>
          </View>
        }
      >
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </React.Suspense>
    </RecoilRoot>
  );
};

export default App;
