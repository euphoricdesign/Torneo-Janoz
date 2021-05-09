import React, {useState} from 'react';
import './App.css';
import './Form.css'; 
import Prueba from '../src/components/Prueba'
import FormSuccess from './FormSuccess'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uniqueCodeToShow, setUniqueCodeToShow] = useState('')

  function submitForm() {
    setIsSubmitted(true)
  }

  const updateCode = (code) => {
    setUniqueCodeToShow(code)
}

  return (
    <div className="App">
      {
        !isSubmitted ? (
          <Prueba submitForm={submitForm} updateCode={updateCode} />
        ) : (
          <FormSuccess uniqueCodeToShow={uniqueCodeToShow} />
        )
      }
    </div>
  );
}

export default App;
