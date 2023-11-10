import React from 'react'
import {  useEffect, useState } from 'react'
import '../OurNews-Articel/OurNews.css'

const OurNews = () => {
    const [articles , setArticles] =useState ([])

  
    useEffect (()  => {
     getArticles()


    }, [])
    

    const getArticles = async () => {

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await result.json()) 
       
    }


  return (
    <div>
      
        <h1>Our News & Articles</h1>
        <div className="article-container">
  {articles.map(article => (
    <div className="article-item" key={article.id}>
      <img src={article.imageUrl} alt="" />
      <p>{article.category}</p>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    
    </div>
  ))}
</div>
    </div>
  )
}

export default OurNews