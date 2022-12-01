import { useState } from 'react'
import { auth, provider } from '../../firebase/config';
import c from "./Login.module.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err.message))
  }

  return (
    <div className={c.formWrapper}>
      <h1 className={c.loginTitle}>Login</h1>
      <form className={c.loginForm} onSubmit={loginUser}>
        <input className={c.usernameInput} type="email" required onChange={e => {setEmail(e.target.value)}} placeholder="Username"/>
        <input className={c.passwordInput} type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}} placeholder="Password"/>
        <button className={c.submitBtn} type='submit' >Login</button>
      </form>
      <button className={c.loginWithGoogle} onClick={loginWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login