import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const {article, lang} = useParams()
  return (
    <>
    <div className='mt-2'><span className='badge bg-primary'>{lang.toUpperCase()}</span> TUTORIAL FOR EVERYONE</div>
    <Card>
      <Card.Header>{article.toUpperCase()}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    
  )
}

export default ArticleDetail