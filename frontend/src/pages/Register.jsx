import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Register(){
    let navigation = useNavigate();

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [contactNumber, setContactNumber] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordVerified, setPasswordVerified] = useState(false);

    const updatePassword = () => (e) =>{
      setPassword(e.target.value);
      if((confirmPassword == e.target.value) && (confirmPassword != "")){
        setPasswordVerified(true);
      } else {
        setPasswordVerified(false);
      }
    };

    const comparePassword = () => (e) =>{
      setConfirmPassword(e.target.value);
      if((password == e.target.value) && (password != "")){
        setPasswordVerified(true);
      } else {
        setPasswordVerified(false);
      }
    }; 

    const handleClick = async (e) =>{
        e.preventDefault();
        if(firstName && lastName && contactNumber && email && password){
            let obj = {
                "firstName" : firstName.trim(),
                "lastName"  : lastName.trim(),
                "contactNumber" : contactNumber.trim(),
                "email" : email.trim(),
                "password"  : password.trim()
            };
            await axios({
                method: 'post',
                url: '/register',
                data: JSON.stringify(obj),
                headers: { 'content-type': 'application/json' },
            })
            .then(response=>{
                if(response.data == "true"){
                    alert("User Registered !");
                    setTimeout(()=>{
                        navigation("/login");
                    }, 2500);
                } else {
                    alert("User Already Exists !");
                }
            })
            .catch(error=>console.log(error));
        } else {
            console.log("Please complete the input fields");
        }
        
    }

    return (
        <div className="px-5 pt-5">
            <form onSubmit={handleClick} method="post">
                <tbody>
                    <tr>
                        <td colSpan={2} className="fs-5 fw-bold text-center">Register User</td>
                    </tr>
                    <tr>
                        <td colSpan={2}></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">First Name</td>
                        <td><input onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstname" required/></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">Last Name</td>
                        <td><input onChange={(e)=>setLastName(e.target.value)} type="text" name="lastname" required/></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">Contact Number</td>
                        <td><input onChange={(e)=>setContactNumber(e.target.value)} type="text" name="contactNumber" minLength={10} required/></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">Email</td>
                        <td><input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" required/></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold" scope="row">Password</td>
                        <td><input onChange={updatePassword()} type="password" name="password" minLength={8} required/></td>
                    </tr>
                    <tr>
                        <td className="fw-semibold">Password Confirm</td>
                        <td>
                            <input minLength={8} className="!w-full" onChange={comparePassword()} required type="password" name="passwordConfirm" id="passwordConfirm"/>
                            { passwordVerified && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg> }
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="text-center">
                            <button disabled = { !passwordVerified } type="submit" class="btn btn-outline-primary">Submit</button>
                        </td>
                    </tr>
                </tbody>
            </form>
        </div>
    );
}

export default Register;
