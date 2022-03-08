import React, {useEffect, useState} from 'react';
import { getMovies } from '../services/fakeMovieService.js';

const MoviesList=()=> {
    const [movieHolder, setMovieHolder] = useState([]);
    const [listOfDeletes, setListOfDeletes] = useState([]);
    const [ilosc, setIlosc] = useState();



    useEffect(()=>(
        setMovieHolder(getMovies()),
        setListOfDeletes([]),
        setIlosc(Object.keys(getMovies()).length)
        // setIlosc(movieHolder.length)

    ),[])
    

    const onClickHandler = (param)=>{
        listOfDeletes.push(param._id);
        
        
        setMovieHolder(getMovies().filter(
            (movie)=>{
               return listOfDeletes.indexOf(movie._id)<0;
            }
        ));

        setIlosc(movieHolder.length-1)
    }
  return (
    <>
        <div>
            <h4>Showing {ilosc} movies in the database: </h4>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th >Title</th>
                <th >Genre</th>
                <th >Stock</th>
                <th >Rate</th>
                <th ></th>
                </tr>
            </thead>

            <tbody>
                {movieHolder.map((mh)=>(
                    <tr key={movieHolder.indexOf(mh)}>
                        <td>{mh.title}</td>
                        <td>{mh.genre.name}</td>
                        <td>{mh.numberInStock}</td>
                        <td>{mh.dailyRentalRate}</td>
                        <td><button onClick={e=>onClickHandler(mh)} className="btn btn-danger">Delete</button></td>
                    </tr>
                ))}
            </tbody>
            {/* <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
            </tbody> */}
    
    
        </table>
    </>
  )
}

export default MoviesList