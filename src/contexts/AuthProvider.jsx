import { useState } from "react";
import users from "../data/user.json";
import { AuthContext } from "./AuthContext";
import LocalStorageHook from "../components/Hooks/LocalStorageHook";

const AuthProvider = ({ children }) => {
  const [user, setUser] = LocalStorageHook("user", null);
  const [error, setError] = useState(null);

  const login = (identityNumber, password) => {
    setError(null);

    const foundUser = users.find(
      (u) =>
        u.identityNumber === identityNumber && u.password === password
    );

    if (foundUser) {
      const userData = {
        identityNumber: foundUser.identityNumber,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
      };

      setUser(userData);
      setError(null);
      console.log("Login successful:", userData);

      // Return the logged-in user so caller can redirect based on role
      return userData;
    } else {
      setUser(null);
      setError("Invalid Credentials");
      return null;
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem("user");
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, logout, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
