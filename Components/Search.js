import React from 'react'
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native'
import { getFilmFromAPI } from '../API/TMDBApi';
import FilmItem from './FilmItem';
import Loading from './Loading';
import { connect } from 'react-redux'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            film: [],
            isLoading: false
        }
        this.page = 0;
        this.totalPage = 0;
        this.searchText = '';
    }

    _loadFilms() {
        if (this.searchText.length === 0) {
            return;
        }
        this.setState({ isLoading: true })
        getFilmFromAPI(this.searchText, this.page + 1)
            .then(data => {
                this.setState({
                    film: [
                        ...this.state.film,
                        ...data.results
                    ],
                    isLoading: false
                })
                this.page = data.page
                this.totalPage = data.total_pages
            })
    }

    _searchFilm() {
        this.page = 0
        this.totalPage = 0
        this.setState({
            film: []
        }, () => this._loadFilms())
    }

    _updateTextInput(text) {
        this.searchText = text;
    }

    _displayForDetail = (idFilm) => {
        this.props.navigation.navigate('FilmDetail', {
            idFilm: idFilm
        })
    }


    render() {
        console.log(this.props)
        return (
            <View style={styles.view}>
                <TextInput
                    onSubmitEditing={() => this._searchFilm()}
                    onChangeText={(text) => this._updateTextInput(text)}
                    style={styles.textInput}
                    placeholder='Titre du film' />
                <Button
                    style={styles.button}
                    title='Recherche'
                    onPress={() => this._searchFilm()} />
                <FlatList
                    onEndReachedThreshold={0, 5}
                    onEndReached={() => {
                        if (this.page < this.totalPage) {
                            this._loadFilms()
                        }
                    }}
                    data={this.state.film}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem
                        film={item}
                        displayForDetail={this._displayForDetail} />} />

                <Loading isLoading={this.state.isLoading} style={styles.loading_container} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 5
    }
});

const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
export default connect(mapStateToProps)(Search);