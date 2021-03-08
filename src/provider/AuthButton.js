import React from 'react'
import { useAuth } from "./Auth";
import { useHistory } from "react-router-dom";

function AuthButton() {
    const history = useHistory();
    const {user, singOut, singIn} = useAuth()

    return (
        <div>
            { user === 'user' 
            ? <div> 
            <p>Welcome Trainer</p>              
            <button onClick={() => singOut(() => {})}>
                Logout
            </button>
            <button onClick={() => history.push("/")} >
                Home
            </button>
            </div> : 
            <div>
            <button onClick={() => singIn(() => {})}>
                Login
            </button>
            <button onClick={() => history.push("/")} >
                Home
            </button>
            </div>
}
        </div>
    )
}

export default AuthButton;