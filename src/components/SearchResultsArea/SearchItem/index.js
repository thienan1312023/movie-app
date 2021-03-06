import React  from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'reactstrap';
import { replaceAll } from '../../../utils/customString';
import './styles.scss';

const SearchItem = ({movie}) => {
    return (
        <>
            <Link key={movie.id} to={`movie/${movie.id}-${replaceAll(movie.title, ' ', '-')}`} className='movieCard'>
                <Media>
                    <Media left href="#">
                        <Media
                            object
                            data-src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`}
                            src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`}
                            alt={movie.title}
                            className='moviePoster'
                        />
                    </Media>
                    <Media body className='movieBody'>
                        <Media heading>
                            {movie.original_title}
                        </Media>
                        <div className='movieDes'>
                            {movie.overview}
                        </div>
                    </Media>
                </Media>
            </Link>
        </>
    )
}
export default SearchItem;