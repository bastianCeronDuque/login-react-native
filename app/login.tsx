import { useAuth } from "@/components/context/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const {login} = useAuth();

    const handleUsernameChange = (text: string) => {
        setUsername(text);
    }
    const handlePasswordChange = (text: string) => {
        setPassword(text);
    }
    const handleLogin = () => {
        try {
            login(username, password);
            router.replace("/(tabs)");
        }catch(error){
            Alert.alert("Error de login", (error as Error).message);
        }
    }
  return (
    <View style={styles.container}>
      <Text>Inicia Sesion</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Ingresa tu usuario" 
        onChangeText={handleUsernameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pasword</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu pasword"
          secureTextEntry
          onChangeText={handlePasswordChange}
        />
      </View>
      <Pressable 
      style={styles.button}
      onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#00ac70ff",
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 10,
    width: "100%",
  },
  inputContainer: {
    width: "80%",
    marginTop: 16,
  },
  label: {
    marginTop: 8,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#00ac70ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
