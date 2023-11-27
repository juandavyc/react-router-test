import { NavLink } from "react-router-dom";

export const UserRow = ({ id, username, email, handlerUserSelectedForm, handlerRemoveUser }) => {


    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }
    const onUserSelected = (user) => {
        handlerUserSelectedForm(user)
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={
                        () => {
                            onUserSelected(
                                {
                                    // id:id,
                                    // username:username,
                                    // email:email
                                    id,
                                    username,
                                    email
                                }
                            )
                        }
                    }
                > Update
                </button>
            </td>
            <td>
                <NavLink
                    className={'btn btn-success btn-sm'}
                    to={'/users/edit/' + id}>
                    Update Route
                </NavLink>
            </td>
            <td>
                <button type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => { onRemoveUser(id) }}
                > Remove
                </button>
            </td>
        </tr>
    )
}