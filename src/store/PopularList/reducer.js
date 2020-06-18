function PopularListReducer(state, action) {
    switch (action.type) {
        case "setPopularMovieList":
            return { ...state, popularMovieList: action.payload.popularMovieList, isMovie: true };
        case "setPopularTVList":
            return { ...state, popularTVList: action.payload.popularTVList, isMovie: false };
        default:
            return state;
    }
}
export default PopularListReducer;