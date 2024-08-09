import logo from './logo.svg';
import './App.css';
import Input from './components/input'
import {useState} from 'react';


function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  function handleChange(event) {
    if (event.target.name == "title: ") {
      setTitle(event.target.value)
    } else if (event.target.name == "description: ") {
      setDesc(event.target.value)
    }
  
  }
  
  function handleClick() {
    console.log("Name: ",title)
    console.log("Description: ",desc)
    setTitle("")
    setDesc("")
  }

  return (
    <div>
      <Input label="title: " handleChange={handleChange} value={title}></Input>
      <Input label="description: " handleChange={handleChange} value={desc}></Input>
      <button onClick={handleClick}>Submit</button>
    </div>
    
  );
}


export default App;
