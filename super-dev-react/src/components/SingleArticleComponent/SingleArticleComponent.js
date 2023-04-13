import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleArticleComponent.module.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SingleArticleComponent = () => {
  const {post, loadingSinglePost}= useSelector((state)=>state.ArticleReducer)
return(
  <Container className={styles.SingleArticleComponent}>
    SingleArticleComponent Component
  </Container>
)
};

SingleArticleComponent.propTypes = {};

SingleArticleComponent.defaultProps = {};

export default SingleArticleComponent;
