import React from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { Link } from 'react-router-dom'

const ArticleList = () => {
    const{Articles} = useArticles()

  return (
    <div className="articles">
        {
          Articles.map(Article =>(
            <Link key={Article.id} to={`/article/${Article.id}`}>
            <div className="article-item" >
             <div className = "image">
             <img src={Article.imageUrl} alt="" />
              </div> 
              <div className= "category">{Article.category}</div>
              <div className="title"><h3>{Article.title}</h3></div>
              <div className= "content">{Article.content}</div>
            
            </div>
            </Link>
  
            
          ))
        }


      </div>
  )
}

export default ArticleList