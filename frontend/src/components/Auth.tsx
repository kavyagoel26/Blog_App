import { SignupInput } from "@kavyagoel/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth =({type}: {type: "signup" | "signin"}) =>{
const Navigate = useNavigate()
    const [postInputs , setpostInputs] =useState<SignupInput>({
        name:"",
        email:"",
        password:""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
            const jwt = response.data;
            localStorage.setItem("token" , jwt);
            Navigate("/blogs")
        }catch(e){
            alert("Error while signing up")
            //alert the user here that the request failed
        }
    }
    
    return <div className ="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="px-10">
                <div className="text-3xl font-bold mt-4">
                    Create an account
                </div>
            <div className="text-slate-400">
                {type === "signin" ? "Dont have an account?" : "Already have an account?"}
                <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                    {type=== "signin" ? "Sign Up" : "Sign In"}
                </Link>
            </div>
            </div>
            <div className="pt-5">
            {type === "signup" ? <LabledInput label="Name" placeholder="name" onChange= {(e)=>{
                setpostInputs({
                    ...postInputs, //give me all existing strings here, means copying old object into the new object
                    name: e.target.value // and override name  
                })
            }
            } /> : null}

            <LabledInput label="Email" placeholder="abc@gmail.com" onChange= {(e)=>{
                setpostInputs({
                    ...postInputs, //give me all existing strings here, means copying old object into the new object
                    email: e.target.value // and override name  
                })
            }
            }/>

            <LabledInput label="Password" type={"password"} placeholder="password" onChange= {(e)=>{
                setpostInputs({
                    ...postInputs, //give me all existing strings here, means copying old object into the new object
                    password: e.target.value // and override name  
                })
            }
            }/>
        <div className="pt-5">
            <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
           dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
        </div>

            </div>
            </div>
        </div>
    </div>
}


interface LabeledInputType{
    label:string;
    placeholder:string;
    onChange: (e : ChangeEvent<HTMLInputElement>)=> void;
    type? : string
}
function LabledInput({label, placeholder , onChange, type}: LabeledInputType){
    return <div>
        <label className="block mb-2 text-sm  text-gray-900 dark:text-white font-bold">{label}</label>
        <input onChange={onChange} type={type || "text"} className="bg-stone-50 border border-stone-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
         dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
          dark:focus:border-blue-500" placeholder={placeholder} required />

    </div>
}