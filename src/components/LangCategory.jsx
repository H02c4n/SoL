import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const languages =["HTML","CSS","JAVASCRIPT","PYTHON"]

const bgColor ={
    bgColor:"green",
    color:"white"
}

const LangCategory = () => {

    const navigate = useNavigate();

    const[current, setCurrent] =useState(null);


  return (
    <ListGroup horizontal>
        {languages.map((lang, i)=>{
            return(
                <ListGroup.Item role="button" 
                onClick={() => {setCurrent(lang), navigate(`/detail/${lang.toLowerCase()}`)}} 
                className={`${current == lang && 'active'}`}
                key={i}>{lang}</ListGroup.Item>
            )
        })}
      
    </ListGroup>
  )
}

export default LangCategory