import React from 'react'
import Navbar from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import NotesList from './pages/NotesList'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify"


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<NotesList />} />
      </Routes>
      <ToastContainer position='top-right' />
    </div>
  )
}

export default App