import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/components/Navigation/MainNavigation";
import AppContainer from "./src/AppContainer";

export default function App() {
  return (
    <AppContainer>
      <MainNavigation />
      <StatusBar style="auto" />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
