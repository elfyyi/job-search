import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IlanList from './components/IlanList'
import Details from './components/Details'


function App() {
  

  return (
    <div className='App'>
      <h1>İş İlanı Portalı</h1>
      <div className='header'>
        <div className='arama_kutusu'>
          <input type='text' placeholder='İş İlanı Arayın'></input>
          <button id='arama_butonu'>Ara</button>

        </div>

      </div>
      <IlanList/>
      

    </div>
  )
}

export default App
