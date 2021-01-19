import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function FilmDetail({ route, navigation }) {
    const { idFilm } = route.params;
    return (
        <View style={styles.main_container}>
            <Text>Détail sur le film numéro {idFilm}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    }
})

export default FilmDetail