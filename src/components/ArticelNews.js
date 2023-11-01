import React from 'react'
import ArticelNewsBox from './ArticelNewsBox'
import img_article1 from '../assets/images/article-image-1.svg'
import img_article2 from '../assets/images/article-image-2.svg'
import img_article3 from '../assets/images/article-image-3.svg'
import img_punkter from '../assets/images/dot-article.svg'
import Button from './Generics/Button'

const ArticelNews = () => {
  return (
    <section  className="article-news">
  <div  className="container">
    <div  className="section-title">
     <p>Article & News</p>
     <h2>Get Every Single Articles & News</h2>
     <Button type="" text="Browse Articles" url="articles.html" /> 
     
    </div>
    <div  className="article-news">
      
      <ArticelNewsBox img={img_article1} text="Bussiness" title="How To Use Digitalization In The Classroom"/>
      <ArticelNewsBox img={img_article2} text="Bussiness" title="How To Implement Chat GPT In Your Projects"/>
      <ArticelNewsBox img={img_article3} text="Bussiness" title="The Guide To Support Modern CSS Design"/>
      
      
    </div>
    <div  className="punkter">
      <img src={img_punkter} alt="" />

    </div>
</div>
</section>
  )
}

export default ArticelNews