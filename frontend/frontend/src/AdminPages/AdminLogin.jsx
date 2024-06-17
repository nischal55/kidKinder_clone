import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { setReduxUser } from "../Redux/slice/userSlice";
import { useDispatch } from "react-redux";


function AdminLogin() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/auth",{username,password}).then((res)=>{
            dispatch(setReduxUser(res.data.user));
            localStorage.setItem("access_token",res.data.token)
            toast.success("sucess");
            navigate('/Dashboard')
            
           }).catch((err) => {
            console.log(err);
            toast.error("Invalid Credentials");
          });
    }
    
    return (
        <>
        <ToastContainer/>
            <div className="w-[400px] h-[400px] shadow-md mx-auto mt-10">
                <h2 className="text-3xl font-handlee font-bold text-center p-6 pt-16">Admin Login</h2>
                <form onSubmit={handleSubmit} className="mx-16" >
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} className="rounded border w-72 h-10 focus:border-sky-600 focus:outline-none focus:transition-all " required/><br /><br />

                    <label htmlFor="password">Password:</label><br />
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="rounded border w-72 h-10 focus:border-sky-600 focus:outline-none focus:transition-all" required /><br /><br />

                    <input type="submit" value="Login" className="bg-sky-600 text-white text-center w-72 h-10 rounded-full" />


                </form>
            </div>
        </>
    );
}

export default AdminLogin;