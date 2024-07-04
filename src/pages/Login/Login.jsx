
import { useState, useEffect } from "react";
import CInput from "../../common/CInput/CInput";
import "./Login.css";

function Login () {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        //Binding process
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
            //email : maciej@gmail.com
        }))
    }

    useEffect(()=>{

        console.log(credentials)

    }, [credentials])

    return (
        <div className="login-design">
            <CInput 
                type="email"
                name="email"
                placeholder=""
                design="basic-input"
                emitFunction={inputHandler}
            />
            <CInput 
                type="password"
                name="password"
                placeholder=""
                design="basic-input"
                emitFunction={inputHandler}
            />
        </div>
    )
}

export default Login;