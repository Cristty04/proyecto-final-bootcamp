import { Container } from 'react-bootstrap'
import MultiArticleComponent from '../../components/MultiArticlesComponent/MultiArticlesComponent'


export default function ArticlePage(){
  return(
    <Container>
      <h1> Las últimas novedades </h1>
      <MultiArticleComponent></MultiArticleComponent>
    </Container>
  )
};