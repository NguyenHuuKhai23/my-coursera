import {type ReactNode, useState} from "react";
import {AuthContext, type User} from "../../context/AuthContext.js";

type Props = {
    children: ReactNode;
};

export default function AuthProvider ({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);
    
    const login = (user: User) => {
        setUser(user);
        
        
    };
    
    const logout = () => {
        setUser(null);
        
    }
    
    const value = {
        user,
        isAuthenticated: !!user,
        login, 
        logout,
    };
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}