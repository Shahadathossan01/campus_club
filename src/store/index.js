import axios from "axios";
import { action, createStore, thunk } from "easy-peasy"

const userModel={
    userData:localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):null,
    setUserData:action((state,payload)=>{
        state.userData=payload;
    }),
    registerUser:thunk(async(actions,payload)=>{
        try{
            const {data}= await axios.post('http://localhost:1337/api/auth/local/register',{
                username:payload.name,
                email:payload.email,
                password:payload.password
            })
            console.log(data)
            actions.setUserData(data)
            localStorage.setItem('userData',JSON.stringify(data))
        }
        catch(e){
            console.error(e)
        }
    }),
    loginUser:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.post('http://localhost:1337/api/auth/local',{
                identifier:payload.email,
                password:payload.password
            })
            console.log('loginData',data)
            actions.setUserData(data)
            localStorage.setItem('userData',JSON.stringify(data))
        }
        catch(e){
            console.log(e)
        }
    }),
    logoutUser:action(state=>{
        state.userData=null
        localStorage.removeItem('userData')
    })

}

const store=createStore({
    user:userModel
})
export default store;