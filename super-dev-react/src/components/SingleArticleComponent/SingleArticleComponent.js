import React from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';

const SingleArticleComponent = () => {
  const { post, loadingSinglePost }= useSelector((state) => state.ArticlesReducer)

  if (loadingSinglePost){
    return(
      <Bars height={100}
        width={100}>
    
      </Bars>
   )
  }
  return(
  <Container className>
    <Card.Title className='mt-5 mb-3'>
      {post.title} UserId: {post.userId}
    </Card.Title>
    <Card.Text className='mb-5'>
      {post.body}
    </Card.Text>
  </Container>
)
};

SingleArticleComponent.propTypes = {};

SingleArticleComponent.defaultProps = {};

export default SingleArticleComponent;
