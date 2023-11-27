import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2"

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '1234',
        email: 'pepe@correo.com'
    }
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const useUsers = () => {

    // crea el reductor
    // ideal para varias operaciones
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    // una sola opcion, en este casos seleccionar
    const [userSelected, setUserSelected] = useState(initialUserForm);
    // 
    const [visibleForm, setVisibleForm] = useState(false);


    const handlerAddUser = (user) => {

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user
        });

        Swal.fire(
            user.id === 0
                ? 'Usuario creado'
                : 'Usuario actualizado',
            user.id === 0
                ? 'El usuario ha sido creado con exito'
                : 'El usuario ha sido actualizado con exito',
            'success'
        );

        // setVisibleForm(false);
        // // se reinicia el formulario
        // setUserSelected(initialUserForm);

        handlerCloseForm();

    }
    const handlerRemoveUser = (id) => {


        Swal.fire({
            title: '¿Esta seguro?',
            text: "Cuidado, el usuario sera eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id
                });
                Swal.fire(
                    'Usuario eliminado!',
                    'El usuario se ha eliminado con exito.',
                    'success'
                )
            }
        })

    }
    const handlerUserSelectedForm = (user) => {
        // lo pasa como una nueva instancia
        setVisibleForm(true);
        setUserSelected({ ...user })
    }

    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        // Funciones 

        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }
}