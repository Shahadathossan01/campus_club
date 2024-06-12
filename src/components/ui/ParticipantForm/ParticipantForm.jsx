import { Button, TextField } from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ParticipantForm = () => {
    const {clubId}=useParams()
    const {clubData}=useStoreState(state=>state.clubData)
    const {createParticipants}=useStoreActions(action=>action.participants)
    const {fetchClubData}=useStoreActions(action=>action.clubData)
    const {userData}=useStoreState(state=>state.user)
    const filteredClub=clubData?.data?.filter((item=>item.id==clubId))
    const {register,handleSubmit}=useForm()
    const onSubmit=(data)=>createParticipants({data,clubId,clubData,userData})
    useEffect(()=>{
        fetchClubData()
    },[])

    return (
        <div>
            {
                clubData?.data && <div style={{width:'50%',margin:'auto',padding:'40px',textAlign:'center'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="club_title"></label>
                   <input {...register('club_title')} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="text" placeholder={filteredClub[0].attributes.title} disabled={true}
                   name="club_title"
                    id="" />
    
                   <input {...register('name')} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="text" placeholder={userData?userData?.user?.username:'name'} disabled={userData?true:false} name="name" id="" />
    
                   <input {...register('email')} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="text"  placeholder={userData?userData?.user?.email:'email'} disabled={userData?true:false} name="email" id="" /> 
    
                   <input {...register('department',{required:true})} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="text" placeholder='department' name="department" id="" />
    
                   <input {...register('blood',{required:true})} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="text" placeholder='blood group' name="blood" id="" />
    
                   <input {...register('number',{required:true})} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="number" placeholder='phone' name="number" id="" />
    
                   <input {...register('gender',{required:true})} style={{width:'80%',maxWidth:'60%',padding:'10px',border:'2px solid gray',borderRadius:'10px',fontSize:'20px',marginBottom:'20px'}} type="text" placeholder='gender' name="gender" id="" /><br></br>
    
                   <Button type='submit' style={{width:'80%',maxWidth:'60%'}} variant="contained" color="success">
                        Apply Now
                    </Button>
                </form>
            </div>
            }
        </div>
    );
};

export default ParticipantForm;