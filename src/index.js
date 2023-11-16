import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from './views/Contact'



import Home from './views/Home'
import Services from './views/Services';


import { ArticleProvider } from './contexts/ArticleContext';
import Articles from './views/Articles';
import ArticleDetials from './views/ArticleDetials';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter >
   <ArticleProvider>
   <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/Contacts' element= {<Contact/>} />
      <Route path='/News' element= {<Articles/>} />
      <Route path='/Article/:id' element= {<ArticleDetials/>} />
      <Route path='/Services' element={<Services/>} />
    
     

      

    </Routes>
   </ArticleProvider>
    
   
    </BrowserRouter>
    
  </React.StrictMode>
);




