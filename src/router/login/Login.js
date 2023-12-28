import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../server/Firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth"
import { toast } from "react-toastify"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  // const handleSignUp = async(e)=> {
  //   e.preventDefault()
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, `${email}@gmail.com`, password);
  //     console.log('User created:', userCredential.user);
  //   } catch (error) {
  //     console.error('Error creating user:', error.message);
  //   }
  // }

  const authentication = getAuth()
  const handleSignIn = async(e)=> {
    e.preventDefault()
    await signInWithEmailAndPassword(authentication, `${email}@gmail.com`, password)
    .then(()=> {
      toast.success("Welcome")
      localStorage.setItem("email", email)
      navigate("/admin/create-product")
      console.log("successfully signIn");
    })
    .catch(()=>{
      toast.error("Invalid password or email")
      console.log("Username or password is incorrect");
    })
  }





  return (
    <div className="login">
      <div className="login__box">
        <h2>Tizimga kirish</h2>
        <form onSubmit={handleSignIn} action="">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Foydalanuvchi nomi"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Parol"
          />
          <button type="submit">Kirish</button>
        </form>
        <Link to={"/"}>
          <p className="link">Asosiy sahifaga qaytish</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
