import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList"

export const UsersPage = ({
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
}) => {

    return (
        <>

            {!visibleForm ||
                <UserModalForm
                    initialUserForm={initialUserForm}
                    userSelected={userSelected}
                    handlerAddUser={handlerAddUser}
                    handlerCloseForm={handlerCloseForm}
                />
            }
            <div>
                <div className="container my-4">
                    <h2>Users App</h2>
                    <div className="row">
                        <div className="col">
                            {visibleForm ||
                                <button className="btn btn-primary my-2"
                                    type="button"
                                    onClick={handlerOpenForm}
                                >
                                    Nuevo usuario
                                </button>
                            }
                            {
                                users.length === 0
                                    ?
                                    <div className="alert alert-danger" role="alert">
                                        Sin usuarios en el sistema
                                    </div>
                                    : <UsersList
                                        users={users}
                                        handlerUserSelectedForm={handlerUserSelectedForm}
                                        handlerRemoveUser={handlerRemoveUser} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}