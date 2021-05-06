import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Footer from '../src/components/Footer';
import Template from  '../src/components/Template';
import Prueba from '../src/components/Prueba'
import FormSuccess from './FormSuccess'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }

  return (
    <div className="App">
      {
        !isSubmitted ? (
          <Prueba submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )
      }
    </div>
  );
}

export default App;
