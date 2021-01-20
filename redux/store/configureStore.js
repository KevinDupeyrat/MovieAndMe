/**
 * Il s'agit de la configuration du Store de l'application
 * On va lui injecter tous les Reducers (qui contiennent tous une partie 
 * du State global de l'application).
 * la fonction createStore() renvoie un Objet de type Store
 */
import { createStore } from 'redux'
import toggleFavorite from '../reducers/FavoriteReducer'

export default createStore(toggleFavorite)