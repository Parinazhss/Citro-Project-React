import { useContext, createContext, useState, useEffect } from "react";


const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
       const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
       const [Articles, setArticles] = useState([])
       const [Article, setArticle] = useState(null)

   
       useEffect(() => {
        getArticles()
      }, [])

    
    const creatArticle = async (Article) => {
        const result = await fetch (`${apiUrl}` ,{
            method : 'post',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(Article)

        })
       
        if (result.status === 201)
        setArticle( await result.json())
    }

    const getArticles = async () => {
        const result = await fetch(apiUrl);
        setArticles(await result.json());
    }

    const getArticle = async (id) => {
        const result = await fetch (`${apiUrl}/${id}`)
        const data =  await result.json()
        setArticle(data)
    }
  
    const updateArticle = async (id , updateArticle) => {
        const result = await fetch (`${apiUrl}/${id}` ,{
            method : 'put',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(Article)
            

        })

        if (result.status === 200) {
            getArticles()
         }

        }

    const deleteArticle = async (id) => {
        const result = await fetch (`${apiUrl}/${id}` ,{
            method : 'delete',
            

        })

        if (result.status === 200) {
            getArticles()
         }

        }
 
        const clearArticle = () => {
            setArticle(null)
        }

       return (
        <ArticleContext.Provider value={{Articles, Article, creatArticle, getArticles, getArticle, updateArticle, deleteArticle, clearArticle}}>
            {children}
        </ArticleContext.Provider>
       ) 
        
}