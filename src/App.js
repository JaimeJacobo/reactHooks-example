import { useEffect, useState, useMemo} from "react";
import Message from "./Message";
import "./styles.css";

const App = ()=> {

  const [email, setEmail] = useState('')
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState(false)

  useEffect(()=>{ //This line here is going to be executed ONLY after the first render of the page
    console.log('Use Effect []')
  }, [])

  // useMemo(()=>{ //This line here is going to be executed ONLY before the first render of the page
  //   console.log('Use Memo []')
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsUserLoggedIn(true)
  };

  const handleInputChange = (event)=>{
    setEmail(event.target.value)
  }

  useEffect(()=>{
    console.log('email has changed')
  }, [email])

  const checkForLogIn = ()=>{
    if(isUserLoggedIn){
      console.log('user logged in')
      return <Message />
    }
  }

  // const showCompleteEmail = useMemo(()=>{
  //     for(let i = 0; i <1000000000; i++){}
  //     return email + '@@@@@'
  // }, [email])

  console.log('Component Rendered')

  return (
    <div className="App" style={{backgroundColor: backgroundColor ? 'coral' : 'white'}}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="elon@spacex.com" onChange={(event)=>handleInputChange(event)}/>
        <input type="submit" value="submit" />
      </form>
      {/* <h2>{showCompleteEmail}</h2> */}
      <button onClick={()=>setIsUserLoggedIn(false)}>Lougout</button>
      {/* <button onClick={()=>setBackgroundColor(!backgroundColor)}>Change background color</button> */}
      {checkForLogIn()}
    </div>
  );
}

export default App
