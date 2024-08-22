import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Register: React.FC = () => { //Define a functional component for the registration form
    const [email, setEmail] = useState(''); //Declare state for email, updated by setEmail
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate is a hook from React Router Dom. It returns a function that can be used to navigate to a different route. In this case, it's used to navigate to the dashboard page once the user has registered.
  
    const handleSubmit = async (e: React.FormEvent) => { //Function to handle form submission and user registration
      e.preventDefault(); // prevent reload after form submission
      try {
        const { data, error }: { data: any, error: any } = await supabase.auth.signUp({  
            // Destructure(Extract values and assign) the response from supabase.auth.signUp into data and error variables
            email,
          password,
        });
        if (error) throw error.message.includes("Email rate limit exceeded"); 
        //if an error occurs, throw it and handle it in the catch block
        alert("User registered successfully!");
        navigate('/login'); // navigate to the login page once the registration is successful
      } catch (error: any) { //Catch and log any errors that occur during the registration process
        console.error("Error during registration:", error.message);
      }
    };
  
    return (
      
      <form onSubmit={handleSubmit}>
        {/* When the form is submitted, the handleSubmit function is triggered */}
       <h2>Register</h2>
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
  