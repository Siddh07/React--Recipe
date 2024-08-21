import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const Register: React.FC = () => { //Define a functional component for the registration form
    const [email, setEmail] = useState(''); //Declare state for email, updated by setEmail
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => { //Function to handle form submission and user registration
      e.preventDefault(); // prevent reload after form submission
      try {
        const { data, error }: { data: any, error: any } = await supabase.auth.signUp({  
            // Destructure(Extract values and assign) the response from supabase.auth.signUp into data and error variables
            email,
          password,
        });
        if (error) throw error; //if an error occurs, throw it and handle it in the catch block
        alert("User registered successfully!");
      } catch (error: any) { //Catch and log any errors that occur during the registration process
        console.error("Error during registration:", error.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* When the form is submitted, the handleSubmit function is triggered */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        //   Update the email state with the current input value
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default Register;
  