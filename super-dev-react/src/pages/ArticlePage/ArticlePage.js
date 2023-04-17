import { Container } from 'react-bootstrap'
import MultiArticleComponent from '../../components/MultiArticlesComponent/MultiArticlesComponent'


export default function ArticlePage(){
  return(
    <Container>
      <h1 className='mb-5 mt-5'> Las últimas novedades </h1>
      <MultiArticleComponent></MultiArticleComponent>
    </Container>
  )
};