const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) {
    switch (action.type) {
        // Gestion de la liste des favoris
        case 'TOGGLE_FAVORITE':
            // Si le film est dans la liste il faut le supprimer
            if (state.favoritesFilm.findIndex(x => x.id === action.value.id) !== -1) {
                return {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item) => item.id !== action.value.id)
                };
            }
            // Sinon il faut l'ajouter
            return {
                ...state,
                favoritesFilm: [
                    ...state.favoritesFilm,
                    action.value
                ]
            };
        default:
            return state;
    }
}

export default toggleFavorite;