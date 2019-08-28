const loginDataInitialState = [] 

const loginReducer = (state = loginDataInitialState, action) => {
    switch(action.type){
        case 'LOGIN_USER':
            return [action.payload]
        default : 
            return [...state]
    }
}

export default loginReducer