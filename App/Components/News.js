/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, {useState} from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import Article from './Article';

export default function News(props) {

  const styles = StyleSheet.create({
    newsContainer: { flex: 10, 
      flexDirection: 'row', 
      justifyContent: props.loading ? 'center' : 'flex-start' 
    },
  });

  function test(){
    console.log("test");
  }
  return (
    <View style={styles.newsContainer}>
      {
        props.loading
          ?
          <ActivityIndicator size="large" color="#0000ff" />
          :
          <FlatList
            style={{ flex: 10 }}
            data={props.articles}
            renderItem={
              ({ item }) =>
                <Article
                  title={item.title}
                  snippet={item.snippet}
                  byline={item.byline}
                  date={item.date}
                  url={item.url}
                  setArticles={(url) => props.setArticles(url)}
                />
            }

            keyExtractor={(item, index) => index.toString()}
          />
      }
    </View>
  )
}

