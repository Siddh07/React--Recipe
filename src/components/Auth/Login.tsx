import React, { useState } from "react";
import { supabase } from "../../supabaseClient"; //Used for authentication
import { useNavigate } from "react-router-dom"; //Navigates between routes
import Homepage from "../../pages/Homepage";

const Login: React.FC = () => {
  //used react functional component for hooks and states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); //Error varaibel hold error(String) or null with default NULL
  const navigate = useNavigate(); //create function allowing to use useNavigate hooks

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); //Prevent reload after submission
    setLoading(true); //Form submission when loading state is updated
    setError(null); //Clear any error message
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      //Verify the email,password from supabase server

      if (error) throw error; 
      //Throw error and exit from try block
      alert("Login successful!");
      navigate("/Homepage");
      //Redirect to homepage.tsx
    } catch (error: unknown) {

      if (error instanceof Error) {
        //Check if error is instance of standard Error class(message, a name, and a stack trace)
        setError(error.message); 
        //Update error state with message 
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
      //turn off loading indicator after login attempt 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log-In</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        disabled={loading}
        //prevent multiple submission while request is procsesed
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
        //Display text according to loading condition
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
