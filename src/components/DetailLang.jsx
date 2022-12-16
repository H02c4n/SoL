import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleList from './ArticleList';

const DetailLang = () => {
    const{lang} = useParams();
  return (
    <>
    <div className='mt-2'><span className='badge bg-primary'>{lang.toUpperCase()}</span> TUTORIAL FOR EVERYONE</div>
    <ArticleList lang={lang}/>
    </>
    
  )
}

export default DetailLang