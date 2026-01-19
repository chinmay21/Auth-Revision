import { Navigate , Outlet} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setToken, setUser } from "../../redux/slices/authSlice";

const ProtectedRoute = ({ allowedRoles }) => {
    const { token, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if(!token) {
            const storedToken = JSON.parse(localStorage.getItem("token"));
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if( storedToken && storedUser) {
                dispatch(setToken(storedToken));
                dispatch(setUser(storedUser));
            }
        }
    }, [token, dispatch])
    
    if(!token) {
        
        return  <Navigate to='/login' state={{ from: location }} replace />
        
    }

    if(allowedRoles && !allowedRoles.includes(user.role.toLowerCase())) {
        
        return <Navigate to={`/dashboard/${user.role}`} replace />
    }

    return <Outlet/>;
}

export default ProtectedRoute;