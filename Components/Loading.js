import React from 'react'
import { View, ActivityIndicator } from 'react-native';


function Loading({isLoading, style}) {
    return (
        <>
            {_displayLoading(isLoading, style)}
        </>
    )
}


function _displayLoading(isLoading, style) {
    if (isLoading) {
        return (
            <View style={style}>
                <ActivityIndicator size='large' color='#0000ff'/>
            </View>
            
        );
    }
}


export default Loading