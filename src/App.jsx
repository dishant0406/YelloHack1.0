import React, { useState } from 'react';
import Search from './Components/Search/Search';
import Table from './Components/Table/Table';
import DarkModeToggle from './Components/DarkMode/DarkModeToggle';
import './styles.scss';
const App = () => {
  const [selData, setselData] = useState([]);
  const [inv, setInverted] = useState('');
  return (
    <div className='ui container'>
      <div className="navbar"><DarkModeToggle setInverted={setInverted}/></div>
      <Search selData={selData} inv={inv}/>
      <Table selData={selData} setselData={setselData} inv={inv}/>
      <br/>
    </div>
  )
}

export default App