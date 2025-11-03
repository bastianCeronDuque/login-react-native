import { createContext, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
}
interface AuthContextProps {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}
const EXPECTED_USERS = [
  { id: "1", name: "Bastian", password: "123" },
  { id: "2", name: "admin", password: "admin" },
];

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const login = (username: string, password: string) => {
    const foundUser = EXPECTED_USERS.find(
      (u) => u.name === username && u.password === password
    );
    if (foundUser) {
      setUser({ id: foundUser.id, name: foundUser.name });
    } else {
        throw new Error("Invalid username or password");
    }
  };
  const logout = () => {
    setUser(null);
  };
  return(
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
