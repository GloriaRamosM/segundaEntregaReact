import React from 'react'
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/Items/ItemListContainer';

import './App.css'
import ItemDetailContainer from './components/Details/ItemDetailContainer';

function App() {

  return (
  <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </>
  );
}

export default App
