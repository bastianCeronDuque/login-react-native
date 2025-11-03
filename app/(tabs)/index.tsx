import { useAuth } from "@/components/context/auth-context";
import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
    router.replace("/login");
  };
  return (
    <View style={styles.container}>
      <Text>Hola {user?.name}</Text>
      <Text>Welcome to the Home Screen!</Text>
      <Link href="/modal" asChild>
        <Text style={styles.buttonText}>Ir al Modal</Text>
      </Link>
      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Ir al Login</Text>
      </Pressable>
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
  button: {
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
});
