/**
 * @format
 */
import React, { useEffect } from "react";
import { AppRegistry, Text, View } from "react-native";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import App from "./App";
import { name as appName } from "./app.json";

const RenderApp = () => {
  return (
    <React.Suspense
      fallback={
        <View>
          <Text>Loading</Text>
        </View>
      }
    >
      <RecoilRoot>
        <RecoilNexus />
        <App />
      </RecoilRoot>
    </React.Suspense>
  );
};

AppRegistry.registerComponent(appName, () => RenderApp);
