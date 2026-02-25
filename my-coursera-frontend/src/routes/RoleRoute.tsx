import type {User} from "../context/AuthContext.js";
import type {JSX} from "react";
import {UseAuth} from "../hooks/useAuth.js";
import {Navigate} from "react-router-dom";

type Props = {
    roles: User["role"][];
    children: JSX.Element;
};

function RoleRoute({roles, children}: Props) {
   const {user} = UseAuth();
    
    if (!user || !roles.includes(user.role)) {
        return <Navigate to="/" replace/>;
    }
    
    return children;
}

export default RoleRoute;