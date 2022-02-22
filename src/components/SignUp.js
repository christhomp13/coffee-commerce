import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router';
import { useUserAuth } from "../contexts/AuthContext";

function SignUp() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let history = useHistory();

async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
}
  return (
      <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <div className='flex justify-center bg-gray-800 rounded-md p-2 mb-2'>
                        <h1 className="mb-2 text-3xl text-white text-center">Sign up</h1>
                        {error && 
                        <h1>{error}</h1>
                        }
                    </div>
                    <form onSubmit={handleSubmit}>
                        

                        <input 
                            id="email"
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

                        <input 
                            id="password"
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                        <button
                            type="submit"
                            className="w-full bg-gray-500 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>

                    </form>
                    
                </div>

                <div className="text-grey-dark mt-6 mr-2">
                    <h3>Already have an account? </h3>
                </div>
                <button className='flex bg-gray-500 px-5 py-2 hover:bg-gray-800 text-white rounded-md' onClick={()=> history.push('/login')}>Login</button>
            </div>
        </div> 
  )
}

export default SignUp;