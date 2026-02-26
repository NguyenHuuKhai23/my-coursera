import {type ReactNode, useState} from "react";
import {AuthContext, type User} from "../../context/AuthContext.js";

type Props = {
    children: ReactNode;
};

// ====== MOCK USER ĐỂ TEST UI ======
// Đổi role để test: "ADMIN" | "INSTRUCTOR" | "STUDENT"
// Set = null để tắt mock (quay lại trạng thái chưa login)
const MOCK_USER: User | null = {
    id: 1,
    email: "admin@coursera.com",
    password: "",
    role: "ADMIN",
};
// ===================================

export default function AuthProvider ({ children }: Props) {
    const [user, setUser] = useState<User | null>(MOCK_USER);
    
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