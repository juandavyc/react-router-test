import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const UserForm = ({ initialUserForm, userSelected, handlerAddUser, handlerCloseForm }) => {

    const navigate = useNavigate();
    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setUserForm({
            ...userForm, //spread
            [name]: value
        })
    }
    // cerrar y resetear
    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }

    // use effect secundario o disparador
    useEffect(() => {
        // lo pasa como una nueva instancia
        setUserForm({
            ...userSelected
        })
    }, [userSelected])

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            Swal.fire(
                'Error de validacion',
                'Debe completar los datos del formulario',
                'success'
            )
            return
        }
        if(!email.includes('@')){
            Swal.fire(
                'Error de validacion',
                'Correo no valido',
                'success'
            )
            return
        }

        handlerAddUser(userForm);
        setUserForm(initialUserForm);
        navigate('/users');
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="hidden" className="form-control my-3 w-75"
                name="id"
                value={id}
                onChange={onInputChange}
            />
            <input type="text" className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {id === 0 ?
                <input type="password" className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
                : ''
            }

            <input type="text" className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <button
                type="submit"
                className="btn btn-primary"
            >
                {id === 0 ? 'Crear' : 'Editar'}
            </button>

            {!handlerCloseForm ||
                <button className="btn btn-primary mx-2"
                    type="button"
                    onClick={onCloseForm}>
                    Cerrar
                </button>
            }


        </form>
    )
}

