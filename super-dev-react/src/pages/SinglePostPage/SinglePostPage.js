import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../store/articles/actions";
import SingleArticleComponent from "../../components/SingleArticleComponent/SingleArticleComponent";


export default function SinglePostPage(){

    const params = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSinglePost(params.id))
    }, [])
    return(
        <Container>
            <SingleArticleComponent></SingleArticleComponent>
        </Container>
    )
}