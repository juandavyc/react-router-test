import { UserRow } from "./UserRow"

export const UsersList = ({ users = [], handlerUserSelectedForm, handlerRemoveUser }) => {
    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Update - modal</th>
                        <th>Update - route</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ id, username, email }) => (
                            <UserRow
                                key={id}
                                id={id}
                                username={username}
                                email={email}                           
                                handlerUserSelectedForm={handlerUserSelectedForm}
                                handlerRemoveUser={handlerRemoveUser}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}