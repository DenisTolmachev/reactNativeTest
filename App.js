import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("./assets/img/bg-img.jpg")}
      >
        <Text style={styles.title}>Hello World!!!</Text>
        <Text style={styles.text}>My First React Native Project!!!</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 38,
    color: "white",
  },
  text: {
    fontSize: 28,
    color: "white",
  },
});
