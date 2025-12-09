import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Login(){

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    const handleClick = async (e) =>{
        e.preventDefault();
        
        if(email && password){
            let obj = {
                "email" : email.trim(),
                "password"  : password.trim()
            };
                
            await fetch("https://userloginbackend-production.up.railway.app/login", {
                method: "POST",
                headers: {
                'Content-Type': 'application/json'
                },
                body:   JSON.stringify(obj)
            })
            .then(result=>result.json())
            .then(response=>{
                if(response.result=="success"){ 
                    alert("Login Successful !");
                    setTimeout(()=>{
                        navigate("/",{
                            state: { user: response ?. user || "" }
                        });
                    }, 2500);
                } else {
                    alert("Login Failed !");
                }
            })
            .catch(error=>console.log(error));
        } else {
            alert("Please complete the input fields");
        }
    }

    return (
        <div className="px-5 pt-5" id="text">
            <form onSubmit={handleClick} method="post">
                <tbody>
                    <tr>
                        <td colSpan={2} className="fs-5 fw-bold text-center">User Login</td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">Email</td>
                        <td><input onChange={(e)=>setEmail(e.target.value)} type="email" name="email"/></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">Password</td>
                        <td><input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" minLength={8}/></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </td>
                    </tr>
                </tbody>
            </form>
        </div>
    );
}

export default Login;
