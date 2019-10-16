/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Keyboard } from 'react-native';
import { Images } from './App/Themes'
import APIRequest from './App/Config/APIRequest'
import News from './App/Components/News'
import Search from './App/Components/Search'
import metrics from './App/Themes/Metrics';

export default class App extends React.Component {

  state = {
    loading: true,
    articles: [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
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
    this.setState({ loading: false, articles: resultArticles })
  }

  onChangeText(text) {
    this.setState({ searchText: text })
  }

  search() {
    this.loadArticles(this.state.searchText, '');
    this.setState({ searchText: '' })
    Keyboard.dismiss();
  }

  setArticles(urlToFilerOut) {
    const newArticles = this.state.articles.filter((item) => item.url !== urlToFilerOut);
    this.setState({ articles: newArticles });
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
          <News
            articles={articles}
            loading={loading}
            setArticles={this.setArticles.bind(this)}
          />
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
