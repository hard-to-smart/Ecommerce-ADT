import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    
    const isAuthenticated=true;
    return isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ProtectedRoute
