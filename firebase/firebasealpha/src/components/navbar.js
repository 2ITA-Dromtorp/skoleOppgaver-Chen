// Navbar.js
import React, { useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import SignUp from "./signUp";

export default function Navbar() {
  const auth = getAuth();
  const [accheck, setAccheck] = useState(false);
 
  const btntxt = "sign out";

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      console.log("Sign out successful!");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAccheck(true);
        console.log(user);
      } else {
        setAccheck(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
 
  return (
  <>
  
    <nav className="navbar">
      <button className="navbarItem">
        Navbar
      </button>
      {accheck && (
        <button className="navbarItem" onClick={handleSignOut}>
          {btntxt}
        </button>
      )}
      <button className="navbarItem2">
        Navbar
      </button>
    </nav>
    {/* <SignUp accheck={accheck}/> */}
    </>
  );
}