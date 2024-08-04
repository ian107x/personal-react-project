import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenticate } from "../slices/authSlice";
import { User } from "../helpers/types";

export default function LoginForm(){

    const emailRef = useRef<string>("");
    const passwordRef = useRef<string>("");
    //const navigate = useNavigate();
    const dispatch = useDispatch();

    //const [s, setS] = useState<number>(0);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault()
        const user: User = {
            email: emailRef.current?.valueOf(),
            password: passwordRef.current?.valueOf()

        }
        //setS(s + 1)
        //console.error(user)
        authenticate(user)
        
        //navigate("/")
    }
    
    return(
        <div>
        <form className="loginForm" onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
            <div className="formElement">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
            </div>
            

            <div className="formElement">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
            </div>

            <div className="formElement">
                <button className="formButton">Submit Form</button>
            </div>
            <br/>
            <Link to="/">No Account? Create One here</Link>
            
        </form>
        </div>
    )
}