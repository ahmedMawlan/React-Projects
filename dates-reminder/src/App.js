import React, {useState, useEffect} from 'react';
import "./css/style.css"
import CardEx from "./components/card";
import Head from "./components/header";
import Buttons from './components/buttons'
import { Container } from 'react-bootstrap';
import { data } from './components/data';
function App() {

  const [state, setState] = useState(data)

  const deleteData = ()=>{
    setState([])
  }

  const showData = ()=>{
    setState(data)
  }

  useEffect(()=>{
    setState([])
  }, [])

  return (
    <Container className="container "> 
      <Head  data={state} />
      <CardEx  data={state}  />
      <Buttons onDelete={deleteData} onShowData={showData} />
    </Container>
  );
}

export default App;
