import {useStoreActions, useStoreState } from "easy-peasy";
import {useEffect } from "react";
import ClubDetailLayout from "../ClubDetailsLayout/ClubDetailLayout";

const ClubDetails = () => {
    const {fetchClubData}=useStoreActions(action=>action.clubData)
    const {clubData}=useStoreState(state=>state.clubData)
    useEffect(()=>{
        fetchClubData()
    },[])
    return (
            <div style={{margin:'auto',width:"80%",marginTop:'40px',padding:'20px',marginBottom:'40px'}}>
            {
                clubData?.data?.map((item)=>(
                    <ClubDetailLayout item={item} key={item.id}></ClubDetailLayout>
                ))
            }
        </div>
    );
};

export default ClubDetails;