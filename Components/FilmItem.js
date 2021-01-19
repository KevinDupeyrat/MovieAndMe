import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getFilmImage } from '../API/TMDBApi';

class FilmItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film : props.film 
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.film.id !== nextState.film.id
    }

    render() {
        const { displayForDetail } = this.props

        return (
            <TouchableOpacity style={style.main_container} onPress={() => displayForDetail(this.state.film.id)}>
                <Image style={style.image} source={{uri: getFilmImage(this.state.film.poster_path)}}></Image>
                <View style={style.content}>
                    <View style={style.header_view}>
                        <Text style={style.title_text}>{this.state.film.title}</Text>
                        <Text style={style.vote_text}>{this.state.film.vote_average}</Text>
                    </View>
                    <View style={style.description_view}>
                        <Text style={style.description_text} numberOfLines={4}>{this.state.film.overview}</Text>
                    </View>
                    <View style={style.date_view}>
                        <Text style={style.date_text}>Sortie le {this.state.film.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
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
    }
});

export default FilmItem;