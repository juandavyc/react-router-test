//
export const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            // array
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime()
                }
            ]
        case 'removeUser':
            // array filtado
            return state.filter((user) => user.id !== action.payload)
            // return state.filter((user)=>{
            //     return user.id !== action.payload
            // })
        case 'updateUser':
            // array filtado
            return state.map((usuario) =>{
                // devuelve el objeto modificado
                if(usuario.id == action.payload.id){
                    return{
                        ...action.payload,
                        password:usuario.password
                    };
                }
                // devuelve el objeto
                return usuario
            })

        default:
            return state;
    }
}