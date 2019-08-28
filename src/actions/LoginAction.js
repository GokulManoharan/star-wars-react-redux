import axios from 'axios'

export const loginUser = (data) => {
    return({
        type : 'LOGIN_USER',
        payload : data 
    })
}

export const startLoginUser = (username,password) => {
    return (dispatch) => {
        axios.get(`https://swapi.co/api/people/?search=${username}`)
                .then(res => {
                    if(res.data.results.length > 0){
                        if(res.data.results[0].name === username){
                            if(res.data.results[0].birth_year === password){
                                localStorage.setItem('user', JSON.stringify(username))
                                dispatch(loginUser({
                                    username : username,
                                    loginStatus : true
                                }))
                            }else{
                                dispatch(loginUser({
                                    loginStatus : false
                                }))
                            }
                        }else{
                            dispatch(loginUser({
                                loginStatus : false
                            }))
                        }
                    }else{
                        console.log('User details not found')                        
                    }
                })
                .catch(err => {
                    console.log(err)
                })
    }
}