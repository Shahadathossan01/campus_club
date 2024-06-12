import axios from "axios";
import { action, createStore, thunk,} from "easy-peasy"


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
const clubDetailsModel={
    clubData:null,
    setClubData:action((state,payload)=>{
        state.clubData=payload
    }),
    fetchClubData:thunk(async(actions)=>{
        const {data}=await axios.get('http://localhost:1337/api/club-details?populate=*')
        actions.setClubData(data)
    })
}
const participantsModel={
    participantsData:[],
    setData:action((state,payload)=>{
        state.participantsData=payload
    }),
    createParticipants:thunk(async(actions,payload)=>{
        const{data,clubId,clubData,userData}=payload
        const filterdData=clubData.data.filter((item=>item.id ==clubId))
        try{
            await axios.post('http://localhost:1337/api/participant-details',{
                data:{
                    name:userData.user.username,
                    email:userData.user.email,
                    phone:data.number,
                    department:data.department,
                    blood:data.blood,
                    gender:data.gender,
                    club_name:filterdData[0].attributes.title,
                    club_id:clubId
                }
            })
        }catch(e){
            console.log(e)
            console.log('you have already include this club')
        }
    }),
    fetchParticipantsData:thunk(async(actions,payload)=>{
        try{
            const {data}=await axios.get('http://localhost:1337/api/participant-details')
            actions.setData(data)
        }catch(e){
            console.log(e)
        }
    })

}
const store=createStore({
    user:userModel,
    clubData:clubDetailsModel,
    participants:participantsModel
})
export default store;