import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/articles/actions';
import { Bars } from 'react-loader-spinner';
import {Link} from 'react-router-dom';


const MultiArticlesComponent = () => {
    
    const dispatch = useDispatch()
    const {posts,loadingPosts} = useSelector((state)=> state.ArticlesReducer)

     useEffect(()=>{ 
        dispatch(getPosts())
     },[])

     if(loadingPosts){
        return(
            <Container>
                <Bars
                height={100}
                width={100}>
                </Bars>
            </Container>
        )
     }
     
    return( 
        <Container striped>
        {posts.map(post=>{
            return(
                <Card className='px-4 py-2 mb-3'>
                    <Card.Title>
                        <Link to={`/post/${post.id}`}> {post.title}</Link> 
                    </Card.Title>
                    <Card.Body>
                        {post.body}
                    </Card.Body>
                </Card>
            )
        })}
        </Container>
    )
};

// MultiArticlesComponent.PropTypes = {};
// MultiArticlesComponent.defaultProps = {};

export default MultiArticlesComponent;
