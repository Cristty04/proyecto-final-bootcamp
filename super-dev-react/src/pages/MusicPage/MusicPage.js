import { Container } from 'react-bootstrap'


export default function MusicPage(){
  return(
    <Container>
      <h1 class="d-flex justify-content-around m-5"> Las mejores playlist para escuchar mientras programas </h1>
      {/*  se puede hacer iframe de canciones HTML */}
      <div class="d-flex justify-content-around m-5">
      <div class="music-list1">
        <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:5EgHMRAr7SBqmK6HSX8dRP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div class="music-list2">
        <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:5j8Si4303MCM3wMqXScMF4" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div class="music-list3">
        <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:5PqMbsx7V1y1YfjZfTlDku" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </div>
      <div className='d-flex justify-content-around m-5'>
      <div class="music-list4">
        <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:37i9dQZF1E35n1zY7uOqB3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div class="music-list5">
        <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:37i9dQZF1E38jd5MQcHowx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      <div class="music-list6">
        <iframe src="https://open.spotify.com/embed?uri=spotify:playlist:37i9dQZEVXbt9AeE6kLyD1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
      </div>

    </Container>
     
  )
};