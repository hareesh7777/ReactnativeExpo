import { Button } from "@mui/material";

type MovieCardProps = {
  movie: {
    url: string;
    title: string;
    overview: string;
  };
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const handleFavirote = () => {
    console.log(movie);
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button className="btn" onClick={handleFavirote}>
            View Details
          </button>
          <Button variant="outlined" color="primary">View</Button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
