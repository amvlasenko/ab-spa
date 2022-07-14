import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {userRoutes} from './app/router';

function App() {
   return (
      <BrowserRouter>
         <Header/>
         <Routes>
            {userRoutes.map(route =>
               <Route
                  element={route.component}
                  path={route.path}
                  key={route.path}
               />
            )}
         </Routes>
         <Footer/>
      </BrowserRouter>);
}

export default App;
