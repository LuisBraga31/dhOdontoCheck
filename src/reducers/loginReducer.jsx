export const loginReducer = (state, action) => {

    switch(action.type) {
        case 'SET_LOGIN':
            return ( {...state, login: true})
        case 'SET_LOGOUT':
            return ( {...state, login: false})
    }

}
