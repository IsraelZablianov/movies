import { Movie } from '../../models/Movie';
import { ReactComponent as Star } from '../../assets/images/star.svg';
import { ReactComponent as Arrow } from '../../assets/images/arrow.svg';
import './MovieCard.scss';
import { Button } from '../button/Button';
import { useAppDispatch } from '../../store/store';
import { setSelectedMovieId } from '../../store/movies/movies.slice';

interface MovieProps {
    movie: Movie;
}

const MISSING_VALUE = 'N/A';

export const MovieCard = ({ movie }: MovieProps) => {
    const dispatch = useAppDispatch();

    const handleMovieCardClick = (id: string) => {
        dispatch(setSelectedMovieId(id));
    };

    return (
        <div className='Movie'>
            <img src={movie.image} alt={movie.title}></img>
            <div className='Title'>{movie.title || MISSING_VALUE} ({movie.released || MISSING_VALUE}) </div>
            <div className='Rating'>
                <Star className='Star'/>
                <span> {movie.rating || MISSING_VALUE} </span>
            </div>
            <Button text='Read more' icon={<Arrow />} onClick={() => handleMovieCardClick(movie.id)}></Button>
        </div>
    );
};
