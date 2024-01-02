import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Fonts } from "./src/constants";
import RootNavigator from "./src/navigation/RootNavigator";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Clipboard has been extracted from react-native core"]);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(Fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootNavigator onReady={onLayoutRootView} />;
}
