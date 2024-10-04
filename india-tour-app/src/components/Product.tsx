import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    interface MyMovie{
        Title:string ,
    Year: string,
    Runtime: string,
    Poster: string
    id: string
    }
  const [movies, setMovies] = useState<MyMovie[]>([]);

  useEffect(() => {
    axios
      .get<MyMovie[]>("http://localhost:3000/movies")
      .then((res) => {
        console.log(res.data)
        setMovies(res.data)
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>
        <h1>Movies List</h1>
      </div>
      <div>
        <Link to="http://localhost:5173/crt" className="btn btn-success m-2 p-2" target="new">ADD+</Link>
      </div>
      <div className=" w-75 rounded  shadow p-4">
        <table className="table">
          <thead>
          
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Runtime</th>
              <th scope="col">Poster</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr>
                <th scope="row">{movie.id}</th>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Runtime}</td>
                <td>
                  {<img src={movie.Poster} height={100} width={100}></img>}
                </td>
                <td className="d-flex justify-content-end">
                    <button className="btn btn-primary  m-2  p-2">Edit</button>
                    <button className="btn btn-danger  m-2  p-2">Delete</button>
                  
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;