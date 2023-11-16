import React, { useEffect } from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import ShowcaseNews from '../components/ShowcaseNews'
import Footer from '../components/Footer'

const ArticleDetials = () => {
    const {Article , getArticle, clearArticle} = useArticles()
    const {id} = useParams()

    useEffect(() =>{
        getArticle(id)

        return () => clearArticle()
   },[])

  return (
    <div>
        <Header />
        <ShowcaseNews />
       < h1> ArticleDetials</h1>
       {
         Article ?
         (
            <div className="article-item" >
            <div className="title"><h1>{Article.title}</h1></div>
             <div className= "category">{Article.category}</div>
             
            
             <div className= "content">{Article.content}</div>
             <div className = "image">
            <img src={Article.imageUrl} alt="" />
             </div> 
             <div className="text"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.

Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.

Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
</p></div>
             </div> 
         )
         :
         (
            <div> TEST </div>
         )
       }
<Footer />
    </div>
  )
}

export default ArticleDetials