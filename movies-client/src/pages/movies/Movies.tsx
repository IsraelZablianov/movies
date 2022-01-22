import { useSelector } from "react-redux";
import { MovieCard } from "../../components/movie-card/MovieCard";
import { MovieQuality, MovieType } from "../../models/Filter";
import { useGetMoviesQuery } from "../../store/movies/movies.api";
import { RootState } from "../../store/store";
import './Movies.scss';

export const Movies = () => {
  const { data: movies } = useGetMoviesQuery();
  const filterOptions = useSelector((state: RootState) => state.movies.filterOptions);
  
  const isContains = (stringToCheck: string, searchTerm: string) => {
    return stringToCheck?.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
  };

  const filterMovies = () => {
    const { searchTerm, quality, type } = filterOptions;
    const filteredQualityMovies =  quality && quality !== MovieQuality.All ? movies?.filter(movie => movie.quality === quality) : movies; 
    const filteredTypeMovies =  type && type !== MovieType.All ? filteredQualityMovies?.filter(movie => movie.type === type) : filteredQualityMovies; 

    return searchTerm ? filteredTypeMovies?.filter((movie) => {
      return isContains(movie.title, searchTerm) ||isContains(movie.synopsis, searchTerm);
    }) : filteredTypeMovies;
  };

  const filteredMovies = filterMovies();
  

  return (
    <div className="Movies">
      <div className="Movies-Title">
        Explore Your Next <br />
        Movies And TV Shows
      </div>
      <ul className="Movies-List">
      {
        filteredMovies?.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })
      }
      </ul>
     
    </div>
  );
};
