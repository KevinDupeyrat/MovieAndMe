import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { getFilmDetailFromAPI, getFilmImage } from '../API/TMDBApi';
import Loading from './Loading';
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }


    _displayFilm() {
        if (this.state.film) {
            return (
                <ScrollView style={styles.scrollView}>
                    <Image style={styles.image} source={{ uri: getFilmImage(this.state.film.backdrop_path) }}></Image>
                    <Text style={styles.title}>{this.state.film.title}</Text>
                    <Text style={styles.description}>{this.state.film.overview}</Text>
                    <View style={styles.detail}>
                        <Text style={styles.detail_element}>Sortie le {moment(new Date(this.state.film.release_date))
                            .format('DD/MM/YYYY')}</Text>
                        <Text style={styles.detail_element}>Note: {this.state.film.vote_average} / 10</Text>
                        <Text style={styles.detail_element}>Nombre de vote: {this.state.film.vote_count}</Text>
                        <Text style={styles.detail_element}>Budget: {numeral(this.state.film.budget)
                            .format('0,0[.]00 $')}</Text>
                        <Text style={styles.detail_element}>Genre(s): {this.state.film.genres
                            .map(element => element.name).join(" / ")}</Text>
                        <Text style={styles.detail_element}>Companie(s): {this.state.film.production_companies
                            .map(element => element.name).join(" / ")}</Text>
                    </View>
                </ScrollView>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Loading isLoading={this.state.isLoading} style={styles.loading_container}></Loading>
                {this._displayFilm()}
            </View>
        )
    }


    componentDidMount() {
        getFilmDetailFromAPI(this.props.route.params.idFilm).then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    scrollView: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 450,
        height: 200,
        marginTop: 20,
        backgroundColor: 'gray'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description: {
        marginTop: 10
    },
    detail: {
        marginTop: 10,
    },
    detail_element: {
        fontWeight: 'bold'
    }
})

export default FilmDetail