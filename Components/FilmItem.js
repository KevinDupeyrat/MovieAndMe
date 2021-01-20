import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getFilmImage } from '../API/TMDBApi';

class FilmItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film: props.film
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.film.id !== nextState.film.id) || this.props !== nextProps
    }

    _displayFavorite() {
        if (this.props.isFavorite) {
            const source = require('../assets/ic_favorite.png');
            return (
                <Image style={styles.favoris_image} source={source}></Image>
            )
        }
    }

    render() {
        const { displayForDetail } = this.props

        return (
            <TouchableOpacity style={styles.main_container} onPress={() => displayForDetail(this.state.film.id)}>
                <Image style={styles.image} source={{ uri: getFilmImage(this.state.film.poster_path) }}></Image>
                <View style={styles.content}>
                    <View style={styles.header_view}>
                        {this._displayFavorite()}
                        <Text style={styles.title_text}>{this.state.film.title}</Text>
                        <Text style={styles.vote_text}>{this.state.film.vote_average}</Text>
                    </View>
                    <View style={styles.description_view}>
                        <Text style={styles.description_text} numberOfLines={4}>{this.state.film.overview}</Text>
                    </View>
                    <View style={styles.date_view}>
                        <Text style={styles.date_text}>Sortie le {this.state.film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        margin: 5
    },
    header_view: {
        flex: 1,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 3,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_view: {
        flex: 2
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_view: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    },
    favoris_image: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginTop: 10
    }
});

export default FilmItem;