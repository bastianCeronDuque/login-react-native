import { useAuth } from "@/components/context/auth-context";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.title}>👋 Hola {user?.name || "Invitado"}</Text>
      <Text style={styles.subtitle}>Bienvenido a la pantalla principal</Text>

      <Link href="/modal" asChild>
        <Pressable style={[styles.button, styles.primary]}>
          <Text style={styles.buttonText}>Ir al Modal</Text>
        </Pressable>
      </Link>

      <Pressable style={[styles.button, styles.logout]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  primary: {
    backgroundColor: "#2563eb",
  },
  logout: {
    backgroundColor: "#ef4444", 
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
