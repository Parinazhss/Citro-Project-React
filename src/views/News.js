import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowcaseNews from '../components/ShowcaseNews'


const News = () => {
  return (
    <div className="wrapper">
    <Header />
    <main>
   <ShowcaseNews/>
   
    </main>
    <Footer />
     
   
  </div>
  )
  
}

export default News