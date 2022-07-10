import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AddTask from "./AddTask/AddTask";
import UpdateTask from "./UpdateTask/UpdateTask";


import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Routes>
            <Route path="/"element={<App />}/>
            <Route path="/add" element={<AddTask/>}/>
            <Route path="/update/:id"element={<UpdateTask/>}/>
            
            

        </Routes>
    
    </BrowserRouter>
  
);


