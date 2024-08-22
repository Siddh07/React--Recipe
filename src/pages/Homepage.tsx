import React from 'react';
import { supabase} from '../../src/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    //indicate function is asynchronous return promise 
    try {
        //try-catch block,  handle errors occur within the code inside the block
      await supabase.auth.signOut();
      //signOut mehtod  within auth module 
      //await wait for this Promise to resolve before I can continue
      alert("You have been signed out!");
      navigate('/login'); // Navigate back to the login page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Homepage;