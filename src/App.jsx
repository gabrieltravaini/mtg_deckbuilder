import { useState } from 'react'
import BuscaCarta from './components/BuscaCarta'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='h-1/2 flex flex-col justify-center items-center pt-52 bg-slate-300'>
    <h1 className="text-3xl font-bold ">
      MTG card search
    </h1>
    <SearchBar/>
    </div>
  )
  

}

export default App
