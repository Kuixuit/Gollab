import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import Home from './pages/Home'
import Login from './pages/Login'
import "./style.scss";
import {AuthContextProvider} from './context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={ <Login/>} />
        <Route path='/home' element={
           <Protected>
            <Home/>
           </Protected>
        } />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;