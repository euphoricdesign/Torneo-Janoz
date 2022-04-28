import React, {useState, useCallback} from 'react';
import Prueba from '../src/components/Prueba';
import FormSuccess from './FormSuccess';
import './App.css';
import './Form.css'; 

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [uniqueCodeToShow, setUniqueCodeToShow] = useState('')

  function submitForm() {
    setIsSubmitted(true)
  }

  const updateCode = useCallback(
    (code) => {
      setUniqueCodeToShow(code) // Código único para mostrar, le llega del hook useForm 
    },
    [],
  )

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
