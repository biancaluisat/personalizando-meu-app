import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const biancaLogo = require("../../assets/bianca-legal.png");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={biancaLogo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.eyebrow}>₊˚ ‿︵‿︵ · · ୨୧ · · ‿︵‿︵ ˚₊</Text>
          <Text style={styles.title}>Bianca Legal
          </Text>
          <Text style={styles.description}>
            Projeto feito para ampliar os meus conhecimentos da disciplina mobile.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coisas super legais:</Text>
          <Text style={styles.cardItem}>• Eu</Text>
          <Text style={styles.cardItem}>• Roxo</Text>
          <Text style={styles.cardItem}>• One Direction</Text>
          <Text style={styles.cardItem}>• Robert Pattinson</Text>
        </View>

        <Link href="/modal" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Clique para uma super curiosidade!!!</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e9e6e1",
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  hero: {
    alignItems: "center",
    gap: 5,
    padding: 20,
    borderRadius: 24,
    backgroundColor: "#7c3ca1",
    borderWidth: 2,
    borderColor: "#c24e4e"
  },
  logo: {
    width: 220,
    height: 120,
    marginBottom: 4,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#eedff7",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#edf5ff",
    textAlign: "center",
  },
  card: {
    gap: 8,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#9562b3",
        borderWidth: 2,
    borderColor: "#c24e4e"
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#eedff7",
  },
  cardItem: {
    fontSize: 15,
    color: "#f0f0f0",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#7c3ca1",
    borderWidth: 2,
    borderColor: "#c24e4e"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
});
