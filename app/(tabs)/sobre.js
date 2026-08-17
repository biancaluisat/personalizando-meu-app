import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bianca = require("../../assets/biancafofa.jpg");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={bianca}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Bianca Legal
          </Text>
                    <Text style={styles.eyebrow}>Sobre mim</Text>
          <Text style={styles.description}>
            Curso Desenvolvimento de Sistemas desde o ano de 2025. 
          </Text>
          <Text style={styles.description}>
            Atualmente estou no Terceiro Ano do Ensino Médio, e tenho 17 anos.
          </Text>
        </View>

        <Link href="/botao" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>˖ ࣪⊹ Meu aniversário ࣪⊹ ˖ </Text>
          </Pressable>
        </Link>

        <Link href="https://github.com/biancaluisat" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>˖ ࣪⊹ Meu GitHub ࣪⊹ ˖ </Text>
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
    gap: 10,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#7c3ca1",
    borderWidth: 2,
    borderColor: "#c24e4e"
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 4,
    borderRadius: 120,
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
