import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <Text>Welcome to the Home Screen!</Text>
      <Link href="/modal" asChild>
        <Text style={styles.buttonText}>Ir al Modal</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginTop: 15,
    paddingVertical: 15,
    color: "blue",
  },
});
