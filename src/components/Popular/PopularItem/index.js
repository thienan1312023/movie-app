import React from 'react';
import { replaceAll } from '../../../utils/customString';
import { PopularContext } from '../../../store/PopularList';
import './styles.scss';
import { Link } from 'react-router-dom';

const ORG_URL = 'https://image.tmdb.org/t/p/w220_and_h330_face'; 

function PopularItem({ PopularItem }) {
    const { typeOfVideo: {isMovie} } = React.useContext(PopularContext);
    const { id, poster_path, title, release_date, vote_average } = PopularItem;
    return (
        <div className="popular-item">
            {isMovie ?
                <Link to={`movie/${id}-${replaceAll(title, ' ', '-')}`}>

                    <div className="popular-item__image">
                        <img src={ORG_URL + poster_path} alt="poster" />
                    </div>
                    <div className="popular-item__rate">{vote_average}</div>
                    <div className="popular-item__content">
                        <div className="popular-item__content__title">{title}</div>
                        <div className="popular-item__content__release">{release_date}</div>
                    </div>
                </Link>
                : <Link to={`tv/${id}-${replaceAll(title, ' ', '-')}`}>
                    <div className="popular-item__image">
                        <img src={ORG_URL + poster_path} alt="poster" />
                    </div>
                    <div className="popular-item__rate">{vote_average}</div>
                    <div className="popular-item__content">
                        <div className="popular-item__content__title">{title}</div>
                        <div className="popular-item__content__release">{release_date}</div>
                    </div>
                </Link>
            }
        </div>

    );
}

export default PopularItem;