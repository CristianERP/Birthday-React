import React, {useState} from 'react';

import './App.css';

import Display from './components/Display';
import Button from './components/Button';


function App() {
  const [show, setShow] = useState(true);

  const showBirthdays = () => {
    setShow(false);
  }

  return (
    <div className="container">
      <h1>Birthdays Today</h1>
      <Display show={show} />
      <Button onClick={showBirthdays}/>
    </div>
  );
}

export default App;
