import React, { useState } from "react";
import FormInput from './FormInput'
import MyButton from './MyButton'
import "./signin.scss";
import { signInWithGoogle } from './firebase/firebase.utils';

function Signin() {
  const [state, setState] = useState({ email: "", password: "" });

 const handleSubmit = (e) => {
    e.preventDefault();

    setState({ email:'', password: '' });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({ [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>already have an account</h2>
      <span>sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          label='email'
          handleChange={handleChange}
          required
        />
        
        <FormInput
          name="password"
          type="password"
          value={state.password}
          label='password'
          required
        />
        
        <div className='buttons'>

        <MyButton type="submit"  >Sign in</MyButton>

         <MyButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</MyButton>
        </div>
      </form>
    </div>
  );
}

export default Signin;
