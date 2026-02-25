import {createContext} from "react";

export type User = {
    id: number;
    email: string;
    password: string;
    role: "ADMIN" | "INSTRUCTOR" | "STUDENT";
}

export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);