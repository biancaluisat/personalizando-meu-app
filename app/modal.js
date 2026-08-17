import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const juca = require("../assets/juca.jpg")

export default function ModalScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Eu tenho um gatinho laranja!</Text>
        <View style={styles.cardJuca}>
        <Image 
          source={juca}
          style={styles.logo}
          resizeMode="contain"
            />
          </View>
        <Text style={styles.description}>
          Esse é meu bebezinho Juca :P
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
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 25,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    color: "#dfdfdf",
  },
  cardJuca: {
    justifyContent: "center",
    width: 260,
    alignItems: "center",
    gap: 10,
    padding: 30,
    borderRadius: 24,
    backgroundColor: "#dfdfdf",
  },
   logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    borderRadius: 20
   },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#dfdfdf",
  },
});
