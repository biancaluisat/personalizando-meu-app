import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const juca = require("../assets/juca.jpg")

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Eu nasci no dia...</Text>
        <Text style={styles.description}>
          13/10/2008
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#7c3ca1",
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems:"center",
    justifyContent: "center",
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#dfdfdf",
  },
  description: {
    fontSize: 30,
    fontStyle:"italic",
    lineHeight: 40,
    color: "#dfdfdf",
  },
});
