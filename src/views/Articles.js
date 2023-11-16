import React from 'react'

import Header from '../components/Header'
import ShowcaseNews from '../components/ShowcaseNews'
import Footer from '../components/Footer'
import '../css/Articles.css'

import ArticleList from '../components/ArticleList'
import NewsLetter from '../components/NewsLetter'

const Articles = () => {
 
  
    


  return (
    <div className="wrapper">
      <Header />
   <main>
   <ShowcaseNews/>
   <section className="articles-section">
    <div className="container">
      <h1>Our News & Articles</h1>
      <ArticleList />

    </div>
   </section>
    <NewsLetter />
   </main> 


<Footer />
   </div>

    
  )
  
}

export default Articles