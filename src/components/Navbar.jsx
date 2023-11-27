import { NavLink } from "react-router-dom"

export const Navbar = ({ login, handlerLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UserApp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">                   
                   <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">
                            Usuarios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users/register">
                            Registrar
                        </NavLink>
                    </li>
                   </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navBarLogout">
                    <span className="nav-item nav-link text-primary mx-3">
                        {login.user?.username}
                    </span>
                    <button
                        onClick={handlerLogout}
                        className="btn btn-outline-success">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}