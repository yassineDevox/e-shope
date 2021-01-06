import React from 'react'
import { Link } from 'react-router-dom'

export default function SigninPage() {
    return (
        <div>
            <h1>
                Signin Page 
                <Link to='/register'>You wanna create an account ?</Link>    
            </h1>
        </div>
    )
}
