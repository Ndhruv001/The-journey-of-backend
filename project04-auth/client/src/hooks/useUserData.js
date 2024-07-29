import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useUserData(){
    const navigate = useNavigate();    
    const [userData, setUserData] = useState({
        username : "",
        email : "",
        password : ""
    });
    
    const token = JSON.parse(localStorage.getItem("token"));
    async function handleClick(){
        try {
            const response = await fetch("http://localhost:8000/auth/user", {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            })
            if(response.ok){
                console.log("response is ok special");
                const jsonResponse = await response.json();
                const data = jsonResponse.data;
                setUserData({
                    username : data.username ,
                    email : data.email,
                    password : data.password
                });
                
                navigate("/user");
            }else{
                console.log("response is nooot ok when fetch data for user")
                navigate("/login");
            }
        } catch (error) {
            console.log("there is something error while fetch data from me route ", error);
        }
    }

    return {
        userData,
        handleClick
    }
}