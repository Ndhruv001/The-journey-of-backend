import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function useLogin(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    });


    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/auth/login", {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(formData)
            });
            if(response.ok){
                const data = await response.json();
                localStorage.setItem("token", JSON.stringify(data.token))
                console.log("response is ok");
                navigate('/user');
            }else{
                console.log("response is noooot ok");
            }
        } catch (error) {
            console.log("something happened while login ", error)
        }
    }

    function handleForgotPassword(){
        navigate("/forgot-password");
    }

    return {
        formData,
        handleChange,
        handleSubmit,
        handleForgotPassword
    }
}