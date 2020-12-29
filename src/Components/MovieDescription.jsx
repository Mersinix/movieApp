import React from 'react';
import {Link,Redirect,useParams} from 'react-router-dom';
import {movieContainer} from './movieContainer';

    
function MovieDescription() {
   
      const {userId}=useParams();

    return (
        <div className="card">
            <div className="card-desc">
                <h1>{movieContainer.find(user=>user.id===Number(userId)).title}</h1>
                <p>{movieContainer.find(user=>user.id===Number(userId)).synopsis}</p>
                <Link  to='/'><button type="button" className="btn">Home</button></Link>
                <button className="btn"><a className="btn-link" href={movieContainer.find(user=>user.id===Number(userId)).trailer}>Trailer</a></button>
            </div>
            <img className="img-card" src={movieContainer.find(user=>user.id===Number(userId)).image}/>
        </div>
        
         
    )
}

export default MovieDescription








   