import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./screens/auth/RegistrationScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("./assets/img/bg-img.jpg")}
      >
        <RegistrationScreen />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
