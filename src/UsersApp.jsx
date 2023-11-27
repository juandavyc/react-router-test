import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "./auth/pages/LoginPage"
import { useAuth } from "./auth/hooks/useAuth"
import { UserRoutes } from "./routes/UserRoutes"



export const UsersApp = () => {
    const { login, handlerLogin, handlerLogout } = useAuth();
    return (
        <Routes>
            {
                // funciona, pero no redirecciona
                login.isAuth
                    ?                   
                    <Route path="/*" element={
                        <UserRoutes
                            login={login}
                            handlerLogout={handlerLogout}
                        />
                    } />
                    :
                    //cualquier ruta que no exista va a login ln 32

                    <>

                        <Route
                            path="/login"
                            element={
                                <LoginPage handlerLogin={handlerLogin} />
                            }
                        />
                        <Route
                            path="/*"
                            element={
                                <Navigate to="/login" />
                            }
                        />

                    </>

            }
        </Routes >
    )
}