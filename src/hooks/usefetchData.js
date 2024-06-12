import axios from "axios";
import { useEffect, useState } from "react";


const usefetchData = (url) => {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        setLoading(true)
        try{
            const {items}=await axios.get(url)
            setData(items)
            setLoading(false)
            setError('')
        }
        catch (e){
            setLoading(false)
            setError(e.message)
        }
    }

    return{
        data,
        loading,
        error
    }
};

export default usefetchData;