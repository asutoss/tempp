import React, { useState } from 'react';
import database from './firebase/firebase';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [mob, setMob] = useState('');
  const [boxN, setBoxN] = useState('');
  const [add, setAdd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, mob, boxN, add});
    const data = { 
      address: add,
      box_number: boxN,
      mobile_Number: mob,
      name
    }
    database.ref(`T4_Data/${boxN}`).set(data).then((ref) => {
      console.log(ref);
      console.log(data);
    });
  }

  return (
    <div className="App">
        <img src="logo.png" />
        <form>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Mobile Number</label>
          <input type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={mob} onChange={(e) => setMob(e.target.value)} />
          <label>Box Number <br/> (For eg: FCBFBBTQL, 4C00DE05(for hd box), 56331403271578)</label>
          <input type='text' value={boxN} onChange={(e) => setBoxN(e.target.value)} />
          <label>Address</label>
          <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
          <button onClick={(e)=>{handleSubmit(e)} }>Submit</button>
        </form>
    </div>
  );
}

export default App;
