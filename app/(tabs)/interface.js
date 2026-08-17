import { View, Text, StyleSheet, Image } from "react-native";

const biancaLogo = require("../../assets/bianca-legal.png");

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        source={biancaLogo}
        style={styles.logo}
        resizeMode="contain"
        />
      <Text style={styles.title}>Bem-vindo ao app!</Text>
      <Text style={styles.subtitle}>
        Sua primeira interface em React Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e6e1",
    justifyContent: "center",
    alignItems: "center",
  },
    logo: {
    width: 220,
    height: 120,
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#52057e",
  },
  subtitle: {
    fontSize: 14,
    color: "#475569",
    marginTop: 8,
  },
});