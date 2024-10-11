import { Movie } from "./mouvies";
import "../stylees.css";

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div 
      className="slider "
      style={{
        "--width": "600px",
        "--height": "400px",
        "--quantity": movies.length,
      } as React.CSSProperties}
    >
      <div className="list">
        {movies.map((movie, index) => (
          <div className="item object-fill  " 
          
            key={index}
            style={{ "--position": `${index + 1}` } as React.CSSProperties}
          >
            <img 
            className="object-cover rounded-4xl"
            src={movie.poster} alt={movie.name} />
          </div>

        ))}
        
      </div>
    </div>
  );
};

export default SmallVideoCarousel;
