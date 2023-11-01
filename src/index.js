import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from './views/Contact'
import News from './views/News'
import NewsArtikel from './views/NewsArtikel'
import Notfound from './views/Notfound'
import Home from './views/Home'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter >
    <Routes>
      <Route path='/Home' element= {<Home/>} />
      <Route path='/Contact' element= {<Contact/>} />
      <Route path='/News' element= {<News/>} />
      <Route path='/NewsArtikel' element= {<NewsArtikel/>} />
      <Route path='*' element= {<Notfound/>} />

      

    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);




