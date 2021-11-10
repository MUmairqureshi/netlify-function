import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [val , setVal ] = useState({ }) ;
  useEffect(()=>{
    fetch('/.netlify/functions/hello?name=from Serverless Function ')
    .then(res=>res.json())
    .then(obj=>setVal(obj))
  },[])
  return (
    <div className="App">  hello 
    
<h1>     {val.message} </h1>
    
    </div>
  );
}

export default App;
