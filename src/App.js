
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header' ;
import Partner from './components/Partner';
import FeaturesSection from './components/FeaturesSection';
import AboutCompany from './components/AboutCompany';
import OurService from './components/OurService';
import ChooseUs from './components/ChooseUs';
import ProjectCase from './components/ProjectCase';
import ShowCase from './components/ShowCase/ShowCase';
import MeetTeam from './components/MeetTeam';
import ArticelNews from './components/ArticelNews';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
      <ShowCase />
      <Partner />
      <FeaturesSection />
      <AboutCompany />
      <OurService />
      <ChooseUs />
      <ProjectCase />
      <MeetTeam />
      <ArticelNews />
      <NewsLetter />
      </main>
      <Footer />
       
     
    </div>
  );
}

export default App;
