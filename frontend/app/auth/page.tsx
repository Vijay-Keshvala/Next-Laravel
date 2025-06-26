"use client"
import React, { useState } from "react";

const Auth: React.FC = () =>{

    interface formData{
        name?: string,
        email?: string,
        password?: string,
        password_confirmation?:string
    }

    const [isLogin,setIsLogin] = useState<Boolean>(true);
    const [formData,setFormData] = useState<formData>({
        name:"",
        email:"",
        password:"",
        password_confirmation:"",
    })

    const handleOnChangeInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault(); 

        if(isLogin){
            alert("Login Successfully")
        }else{
            alert("Register Successfully")
        }
    }

    return <>
     <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4" style={{width: "400px"}}>
            {/* <!-- Login Form --> */}
            <h3 className="text-center">{isLogin ? "Login" : "Register"}</h3>
            <form onSubmit={handleFormSubmit}>
                {
                    !isLogin && (<input className="form-control mb-2" name="name" value={formData.name} onChange={handleOnChangeInput} type="text" placeholder="Name" required/>)

                }
                <input className="form-control mb-2" name="email" type="email" value={formData.email} onChange={handleOnChangeInput} placeholder="Email" required/>
                <input className="form-control mb-2" name="password" value={formData.password} onChange={handleOnChangeInput} type="password" placeholder="Password" required/>
                {
                    !isLogin && (<input className="form-control mb-2" value={formData.password_confirmation} onChange={handleOnChangeInput} name="password_confirmation" type="password" placeholder="Confirm Password" required/>)
                }
                <button className="btn btn-primary w-100" type="submit">{isLogin ? "Login" : "Register"}</button>
            </form>

            <p className="mt-3 text-center cursor-pointer ">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <span onClick={()=>setIsLogin(!isLogin)} style={{cursor:"pointer", color:"Blue"}}>
                    {
                        isLogin ? "Register" : "Login"
                    }
                </span>
                </p>
        </div>
    </div>
    </>;
}

export default Auth;