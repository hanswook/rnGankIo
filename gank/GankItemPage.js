import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

class GankItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageCount: 10,
      data: [],
    };
    this.screenWidth = Math.round(Dimensions.get('window').width);
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData() {
    'api/data/{type}/10/{page_count}';
    let url =
      'https://gank.io/api/data/' +
      //   this.props.category +
      //   '/' +
      this.props.type +
      '/' +
      this.state.pageCount +
      '/' +
      this.state.page;
    axios
      .create()
      .get(url)
      .then((res) => {
        let data = this.state.data.concat(res.data.results);
        console.log('data:' + data.length);
        this.setState({
          data: data,
        });
      })
      .catch((error) => {
        console.log('test axios error:' + error);
      });
  }

  renderItem(item, index) {
    return (
      <View>
        <Image
          key={index}
          source={{uri: item.url}}
          style={{
            width: this.screenWidth - 20,
            height: 200,
            marginStart: 10,
            marginTop: 10,
          }}
        />
        <Text style={{height: 150, width: '100%'}} key={index}>
          {item.desc}
        </Text>
      </View>
    );
  }

  loadMore() {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        console.log('loadMore girlPage:' + this.state.page);
        // this.fetchData();
      },
    );
  }

  render() {
    return (
      <FlatList
        style={{backgroundColor: '#ff00ff', flex: 1}}
        data={this.state.data}
        renderItem={({item, index}) => this.renderItem(item, index)}
        style={{marginBottom: 30}}
        keyExtractor={(item, index) => item._id}
        onEndReachedThreshold={0.1}
        onEndReached={() => this.loadMore()}
      />
    );
  }
}

export default GankItemPage;
