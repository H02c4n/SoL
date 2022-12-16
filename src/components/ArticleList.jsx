import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

const articles = ["Strings", "numbers", "Lists", "Dicts", "Tuppels"]

const ArticleList = ({lang}) => {
   const navigate= useNavigate();
  return (
    <ListGroup variant="flush" className='w-50 mt-4'>
        {articles.map((article,i)=>{
            return(
            <ListGroup.Item 
            key={i}
            onClick={() => navigate(`/detail/${lang}/${article}`)}
            >{article}</ListGroup.Item>)
        })}
    
  </ListGroup>
  )
}

export default ArticleList