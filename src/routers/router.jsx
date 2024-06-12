import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Register from "../components/ui/Register/Register";
import Login from "../components/ui/Login/Login";
import ClubDetails from "../components/ui/ClubDetails/ClubDetails";
import ParticipantForm from "../components/ui/ParticipantForm/ParticipantForm";
import ParticipantsInfo from "../components/ui/ParticipantsInfo/ParticipantsInfo";

const router=createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<ClubDetails></ClubDetails>},
        {path:'/register',element:<Register></Register>},
        {path:'/login',element:<Login></Login>},
        {path:'/participant_form/:clubId',element:<ParticipantForm></ParticipantForm>},
        {path:'/participants_info',element:<ParticipantsInfo></ParticipantsInfo>}
    ]
    
    }
])
export default router;