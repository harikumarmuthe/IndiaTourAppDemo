import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  
  const [movie, setMovie] = useState({
    Title: '',
    Year: '',
    Runtime: '',
    Poster: '',
    id: ''
  });
  const navigate = useNavigate();

  const handleSubmitt = (event: any) => {
    event.preventDefault();
    console.log("movie obj...."+movie);
    axios.post("http://localhost:3000/movies",movie)
    .then(()=>
    navigate('/prd')
    )
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div>
        <h1>Add New Cinema</h1>
      </div>
      <div className=" w-75 rounded  shadow p-4">
        <form onSubmit={handleSubmitt}>
          <label className="m-2">ID</label>
          <input type="text" onChange={(e)=>setMovie({...movie,
            id :e.target.value})} />
          <br />
          <br />
          <label className="m-2">Title:</label>
          <input type="text" 
          onChange={(e)=>setMovie({...movie,Title:e.target.value})}
          />
          <br />
          <br />
          <label>Year</label>
          <input type="text"
          onChange={(e)=>setMovie({...movie,Year:e.target.value})}
          />
          <br />
          <br />
          <label>Runtime:</label>
          <input type="text" 
          onChange={(e)=>setMovie({...movie,Runtime:e.target.value})}
          />
          <br />
          <br />
          <label>Poster URL :</label>
          <input type="text" 
          onChange={(e)=>setMovie({...movie,Poster:e.target.value})}
          />
          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Create;