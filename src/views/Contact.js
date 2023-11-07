import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import MapSection from '../components/MapSection'

const Contact = () => {
  return (
    <div className="wrapper">
    <Header />
    <main>
   <ContactInfo />
   <ContactForm />
   <MapSection />
   
    </main>
    <Footer />
     
   
  </div>
  )
}

export default Contact