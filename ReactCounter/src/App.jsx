import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1)
    }
    else {
      toast.warn("Sorry You can not exceed the Highest Value "), {
        theme:"dark"
      }
    }
  }
  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
    else {
      toast.error(" You can not exceed the Minimum value"), {
        theme: "colored",
      }
    }
  }
  return (
    <>
      <ToastContainer
      theme="colored" />
      <div className='main-container'>
        <div className="container">
          <h1> React Counter :{counter}</h1>
        </div>
        <div className='btn-container'>
          <button onClick={addValue}>Add Value </button>
          <button onClick={removeValue}>Remove Value </button>
        </div>
      </div>
    </>
  )
}

export default App
