import { useEffect, useState } from "react"
import { UserForm } from "../components/UserForm"
import { useParams } from "react-router-dom";


export const RegisterPage = ({ users = [], initialUserForm, handlerAddUser }) => {

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } = useParams();
    // se dispare el useEffect y actualze el id
    useEffect(() => {
        // si existe 
        if (id) {
            const user = users.find(u => u.id) || initialUserForm;
            setUserSelected(user);
        }
    }, [id]);
    return (

        <div className="container my-4">
            <h4>{userSelected.id > 0 ? 'Editar' : 'Registrar'}</h4>
            <div className="row">
                <div className="col">
                    <UserForm
                        initialUserForm={initialUserForm}
                        userSelected={userSelected}
                        handlerAddUser={handlerAddUser}
                    />
                </div>
            </div>
        </div>
    )
}