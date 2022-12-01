import {useState} from 'react';
import { auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [possibleError, setPossibleError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        if(response){
          history.push("/");
        }
      })
      .catch(err => {
        setPossibleError(err.message);
      })
  } 

  return (
    <div>
      {possibleError && <p style={{color: "red"}}>{possibleError}</p>}
      <form onSubmit={createUser}>
        <input type="email" required onChange={e => {setEmail(e.target.value)}}/>
        <input type="password" required minLength={8} onChange={e => {setPassword(e.target.value)}}/>
        <button type='submit'>Create my account</button>
      </form>
    </div>
  )
}

export default SignUp