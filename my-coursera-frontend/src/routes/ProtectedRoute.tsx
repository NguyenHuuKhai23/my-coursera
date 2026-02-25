import type {JSX} from "react";
import {UseAuth} from "../hooks/useAuth.js";
import {Navigate} from "react-router-dom";

type Props = {
  children: JSX.Element;
};

function ProtectedRoute({children}: Props) {
    const {isAuthenticated} = UseAuth();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace/>;
    }
    
    return children;
}

export default ProtectedRoute;