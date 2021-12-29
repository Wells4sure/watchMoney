import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { NativeBaseProvider, useColorMode } from "native-base";

import theme from "./Theme";

type Props = {
  children: React.ReactNode;
};
const AppContainer = (props: Props) => {
    const { colorMode } = useColorMode();
  return (
    <NavigationContainer theme={colorMode === "dark" ? DarkTheme : DefaultTheme}>
      <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
