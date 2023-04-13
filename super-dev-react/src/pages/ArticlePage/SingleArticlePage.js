import React 
// { useEffect }
 from 'react;'
import { Container } from 'react-bootstrap'
import SingleArticleComponent from '../../components/SingleArticleComponent/SingleArticleComponent'
// import { useDispatch } from 'react-redux'
// import { useParams } from 'react-router-dom'

export default  function SingleArticlePage(){
    // const params = useParams()
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatchEvent(getSingleArticle(params.id))
    // },[])
    return (
        <Container>
        <SingleArticleComponent/>
        {/* {params.id} */}
        </Container>
    )
}


