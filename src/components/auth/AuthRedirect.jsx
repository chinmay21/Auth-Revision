import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRedirect = ({children}) => {
    const { token, user } = useSelector((state) => state.auth);

    if(token && user) {
        return <Navigate to={`/dashboard/${user.role.toLowerCase()}`} replace/>
    }

    return children;
};

export default AuthRedirect;