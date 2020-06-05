import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import Banner from './Banner';
import {Dimensions, DeviceEventEmitter, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default class GankGirlHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
      girls: [],
      girlPage: 1,
      loadEnd: false,
    };
    this.fetchBanner(1);
    this.fetchGirl();
    this.screenWidth = Math.round(Dimensions.get('window').width);
  }

  loadMore() {
    this.setState(
      {
        girlPage: this.state.girlPage + 1,
      },
      () => {
        console.log('loadMore girlPage:' + this.state.girlPage);
        this.fetchGirl();
      },
    );
  }
  fetchBanner(page) {
    axios
      .create()
      .get('https://gank.io/api/v2/banners')
      .then((res) => {
        let data = this.state.bannerData.concat(res.data.data);
        this.setState({
          bannerData: data,
        });
      })
      .catch((error) => {
        console.log('test axios error:' + error);
      });
  }
  fetchGirl() {
    console.log('loadMore girlPage:' + this.state.girlPage);
    if (this.state.loadEnd) {
      return;
    }
    axios
      .create()
      .get(
        'https://gank.io/api/v2/data/category/Girl/type/Girl/page/' +
          this.state.girlPage +
          '/count/10',
      )
      .then((res) => {
        let data = this.state.girls.concat(res.data.data);
        if (res.data.data.length < 10) {
          this.setState({
            loadEnd: true,
          });
        }
        this.setState({
          girls: data,
        });
      })
      .catch((error) => {
        console.log('test axios error:' + error);
      });
  }

  renderItem(item, index, onClick) {
    // console.log('render idnex:' + index + ',item:' + item.url);
    return (
      <TouchableWithoutFeedback onPress={onClick}>
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
      </TouchableWithoutFeedback>
    );
  }
  genHeader() {
    return (
      <Banner
        navigation={this.props.navigation}
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
    let girls = this.state.girls;
    // console.log('girls:' + girls.length);
    // console.log('girls:' + JSON.stringify(girls));
    return (
      <View>
        <FlatList
          data={this.state.girls}
          renderItem={({item, index}) =>
            this.renderItem(item, index, () => {
              // this.props.navigation.push('GankGirlPage', {link: item.url});
              // this.props.addGirls(this.state.girls);
              // this.props.addGirl(item);
              this.props.changeGirlPage(index);
            })
          }
          ListHeaderComponent={() => this.genHeader()}
          style={{marginBottom: 30}}
          keyExtractor={(item, index) => item.id}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.loadMore()}
        />
        <Text>2312ssddaa3</Text>
      </View>
    );
  }
}
