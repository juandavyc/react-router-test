import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../service/authService";
import { useNavigate } from "react-router-dom";

// si existe getLogin "no es undefined" tome lo datos.

const initialLogin =
    JSON.parse(sessionStorage.getItem('login')) ||
    {
        isAuth: false,
        user: undefined
    };

export const useAuth = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const navigate = useNavigate();

    const handlerLogin = ({ username, password }) => {

        const isLogin = loginUser({ username, password });

        if (isLogin) {
            const user = { username: 'admin' };
            dispatch({
                type: 'login',
                payload: user
            });
            // guardar en la session
            sessionStorage.setItem(
                'login',
                JSON.stringify({
                    isAuth: true,
                    user, // user:user
                })
            );
            // redireccione o y no quede en login
            navigate('/users');
        }
        else {
            //console.log('error login', 'Username y password incorectos', 'error');
            Swal.fire('error login', 'Username y password incorectos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout'
        });
        sessionStorage.removeItem('login');
    }

    return {
        login,
        handlerLogin,
        handlerLogout
    }
}