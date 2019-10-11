/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, Alert, FlatList, ActivityIndicator } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'
import News from './App/Components/News'
import Search from './App/Components/Search'
import metrics from './App/Themes/Metrics';
import Article from './App/Components/Article';

// function Article({ title, snippet, byline, date }) {
//   return (
//     <View style={styles.article}>
//       <Text >{title}</Text>
//       <Text >{snippet}</Text>
//       <Text >{byline}</Text>
//       <Text >{date}</Text>
//     </View>
//   );
// }

export default class App extends React.Component {

  state = {
    loading: true,
    articles: [],
    searchText: '',
    category: ''
  }

  componentDidMount() {

    //uncomment this to run an API query!
    this.loadArticles();
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({ articles: [], loading: true });
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({ loading: false, articles: resultArticles })
  }

  onChangeText(text) {
    this.setState({ searchText: text })
  }

  search() {
    Alert.alert(this.state.searchText);
    this.setState({ searchText: '' })
  }

  render() {
    const { articles, loading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, width: metrics.screenWidth, }}>
          <Image style={styles.logo} source={Images.logo} />
          <Search
            searchText={this.state.searchText}
            onChangeText={(text) => this.onChangeText(text)}
            searchFunc={() => this.search()}
          />
          <View style={{ flex: 10, flexDirection: 'row', justifyContent: loading ? 'center' : 'flex-start' }}>
            {
              loading
                ?
                <ActivityIndicator size="large" color="#0000ff" />
                :
                <FlatList
                  style={{ flex: 10 }}
                  data={articles}
                  renderItem={
                    ({ item }) => 
                      <Article
                        title={item.title}
                        snippet={item.snippet}
                        byline={item.byline}
                        date={item.date}
                        url={item.url}
                      />
                    }
                  
                  keyExtractor={(item, index) => index.toString()}
                />
            }
          </View>
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
