import React, { useEffect ,useState} from 'react';
import './Rowpost.css';
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'

function Rowpost(props) {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
       setMovie(response.data.results)
    })
  })
  return ( 
    <div className='row'>
        <h2> {props.title}</h2>
       <div className='posters'>
        {movie.map((obj) =>
            <img className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )}

       </div>
    </div>
  )
}

export default Rowpost
