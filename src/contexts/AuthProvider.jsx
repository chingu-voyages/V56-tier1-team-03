import { useState } from "react";
import users from "../data/user.json"
import { AuthContext } from "./AuthContext";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = (identityNumber, password) => {
        // Check if data from form is in the user database
        const foundUser = users.find(user => user.identityNumber === identityNumber && user.password === password);

        // If the user is in the database then we are setting the user information to our user variable, otherwise we are setting the error
        if (foundUser){
            setUser({ identityNumber: foundUser.identityNumber, name: foundUser.name, email: foundUser.email, role: foundUser.role});
            setError(null)
            console.log("Login in successfully")
        } else {
            setUser(null);
            setError("Invalid Credentials")
        }
    }

    // Set everything back to null - therefore the user details is not assigned to the user variable anymore
    const logout = () => {
        setUser(null);
        setError(null);
    }

    return (
        <AuthContext.Provider value={{user, logout, login, error}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
