import React, { useState } from 'react';
import { supabase } from '../../supabaseeClient';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const { data, error }: { data: any, error: any } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert("User registered successfully!");
      } catch (error: any) {
        console.error("Error during registration:", error.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
  