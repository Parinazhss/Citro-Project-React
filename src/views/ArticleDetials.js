import React, { useEffect } from 'react'
import { useArticles } from '../contexts/ArticleContext'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import ShowcaseNews from '../components/ShowcaseNews'
import ArticelNews from '../components/ArticelNews'
import Footer from '../components/Footer'
import '../css/ArticleDetails.css'

const ArticleDetials = () => {
    const {Article , getArticle, clearArticle} = useArticles()
    const {id} = useParams()

    useEffect(() =>{
        getArticle(id)

        return () => clearArticle()
   },[])

  return (
    <div  className='details'>
        <Header />
        <main>
        <ShowcaseNews />
       
       {
         Article ?
         (    <section className='article-details'>
            <div className="article-item" >
            <div className="title"><h1>{Article.title}</h1></div>
             <div className= "category">{Article.category}</div>
             <div className = "image">
            <img src={Article.imageUrl} alt="" />
             </div> 
             <div className="text"><p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/> 
              magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br/><br/>

Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br/>
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra <br/>
nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse<br/>
 dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend.<br/>
  Ut nonummy.<br/><br/>

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br/>
 magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br/>
  unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus<br/>
  et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br/><br/>

Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br/>
Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem <br/>
venenatis eleifend. Ut nonummy.<br/><br/>
</p></div>
     
      

           <div className='text-mitten'>
            <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
             Maecenas <br/>porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, <br/>
            purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br/><br/></h5></div>

            <div className='text-last'>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
               Maecenas porttitor congue massa. Fusce posuere,<br/> magna sed pulvinar ultricies, purus
                lectus malesuada libero, sit amet commodo magna eros quis urna.<br/> unc viverra imperdiet enim. 
                Fusce est. Vivamus a tellus. Pellentesque habitant 
              morbi tristique senectus et <br/>netus et malesuada fames ac turpis egestas.<br/><br/> </p></div>


             </div> 
             </section>
         )
         :
         (
            <div> TEST </div>
         )
         

       }
       <ArticelNews />
       </main>
         <Footer />
    </div>
  )
}

export default ArticleDetials