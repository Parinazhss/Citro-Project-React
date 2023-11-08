import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowcaseNews from '../components/ShowcaseNews'
import OurNews from '../components/OurNews-Articel/OurNews'


const News = () => {
  return (
    <div className="wrapper">
    <Header />
    <main>
   <ShowcaseNews/>
   <OurNews />
    </main>
    <Footer />
     
   
  </div>
  )
  
}

export default News