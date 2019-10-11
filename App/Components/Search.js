/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'


export default function Search(props) {

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <TextInput
        style={{ height: 40, borderColor: 'black', backgroundColor: 'rgb(245,245,245)', borderWidth: 1, flex: 1, margin: 3}}
        onChangeText={text => props.onChangeText(text)}
        value={props.searchText}
      />
      <Button
        title="search"
        onPress={() => props.searchFunc()}
      />
    </View>
    )
}


const styles = StyleSheet.create({

});
