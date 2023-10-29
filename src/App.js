
import './App.css';
import Header from './components/Header' ;
import Partner from './components/Partner';
import FeaturesSection from './components/FeaturesSection';
import AboutCompany from './components/AboutCompany';
import OurService from './components/OurService';
import ChooseUs from './components/ChooseUs';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
      <Partner />
      <FeaturesSection />
      <AboutCompany />
      <OurService />
      <ChooseUs />
      </main>
      
       
     
    </div>
  );
}

export default App;
