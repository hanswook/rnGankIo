import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import Banner from './Banner';
import {Dimensions, DeviceEventEmitter, Image} from 'react-native';

export default class GankHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      girls: [],
    };
    this.fetchBanner(1);
    this.fetchGirl(1);
    this.screenWidth = Math.round(Dimensions.get('window').width);
  }

  fetchBanner(page) {
    axios
      .create()
      .get('https://gank.io/api/v2/banners')
      .then((res) => {
        this.setState({
          bannerData: res.data.data,
        });
      })
      .catch((error) => {
        console.log('test axios error:' + error);
      });
  }
  fetchGirl(page) {
    axios
      .create()
      .get(
        'https://gank.io/api/v2/data/category/Girl/type/Girl/page/' +
          page +
          '/count/10',
      )
      .then((res) => {
        console.log('test girls res:' + res.data.data.length);
        this.setState({
          girls: res.data.data,
        });
      })
      .catch((error) => {
        console.log('test axios error:' + error);
      });
  }

  renderItem(item, index) {
    console.log('render idnex:' + index + ',item:' + item.url);
    return (
      <Image
        key={'girl' + index}
        source={{uri: item.url}}
        style={{
          width: this.screenWidth - 20,
          height: 200,
          marginStart: 10,
          marginTop: 10,
        }}
      />
      //   <Text key={'girl' + index} style={{width: '100%', height: 200}}>
      //     {item.desc}
      //   </Text>
    );
  }
  genHeader() {
    return (
      <Banner
        dataSource={this.state.bannerData}
        height={250}
        width={this.screenWidth}
      />
    );
  }

  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener(
      'checkBannerDetail',
      function (param) {
        //  use param do something
        console.log('checkBannerDetail:' + param);
      },
    );
  }
  //xxxName:通知的名称    param:接收到的消息（传参）

  componentWillUnmount() {
    this.listener.remove();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.girls}
          renderItem={({item, index}) => this.renderItem(item, index)}
          ListHeaderComponent={() => this.genHeader()}
          style={{marginBottom: 30}}
        />
        <Text>2312ssddaa3</Text>
      </View>
    );
  }
}
