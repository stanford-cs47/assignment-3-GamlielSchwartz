/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react'
import { StyleSheet, View, TextInput, Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Search(props) {


    function searchFromKeyboard() {
        Keyboard.dismiss();
        props.searchFunc();
    }

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => props.onChangeText(text)}
                value={props.searchText}
                onSubmitEditing={searchFromKeyboard}
            />
            <Ionicons
                name="md-search"
                size={32}
                color="black"
                onPress={() => props.searchFunc()}
                style={{ flex: 1 }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        borderColor: 'black',
        backgroundColor: 'rgb(245,245,245)',
        borderWidth: 1,
        flex: 1,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textInput : { 
        flex: 9, 
        height: '90%' 
    }
});
