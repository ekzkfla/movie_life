import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import "./Detail.css";
 
function Detail(props){
  const location=useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        
        if(location.state===null){
            navigate('/'); //home으로 되돌아 가는 기능
        }
});
   
    if(location.state){
        return (
            <div className="movieDetail">
      
        <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
        <div className="movieDetail__data">
          <h3 className="movieDetail__title">{location.state.title}</h3>
          <h5 className="movieDetail__year">{location.state.year}</h5>
          <ul className="movieDetail__genres">
            {location.state.genres.map((genre, index) => {
              return (
                <li key={index} className="movieDetail__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movieDetail__summary">{location.state.summary.slice(0, 180)}</p>
        </div>
      
     </div>
        )
    }
    return null;
    }
 
export default Detail;