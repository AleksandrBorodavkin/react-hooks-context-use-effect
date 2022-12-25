import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

export default function App() {
  const [info, setInfo] = useState({});
  const findUser = (user) => setInfo(user);

  return (
    <div className="App">
      <div className="App__container">
        <List findUser={findUser} />
        { info.id ? <Details info={info} /> : null }
      </div>
    </div>
  );
}

