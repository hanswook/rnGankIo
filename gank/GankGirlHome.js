import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import Banner from '../base/Components/Banner';
import {Dimensions, DeviceEventEmitter, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default class GankGirlHome extends Component {
  constructor(props) {
    super(props);
    this.props.fetchGirlsBanner();
    this.props.fetchGirls();
    this.screenWidth = Math.round(Dimensions.get('window').width);
  }

  loadMore() {
    this.props.fetchGirls();
  }

  renderItem(item, index, onClick) {
    // console.log('render idnex:' + index + ',item:' + item.url);
    return (
      <TouchableWithoutFeedback key={index} onPress={onClick}>
        <Image
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
        dataSource={this.props.bannerData}
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
    let girls = this.props.girls;
    console.log('girls:' + girls.length);
    // console.log('girls:' + JSON.stringify(girls));
    return (
      <View>
        <FlatList
          data={this.props.girls}
          renderItem={({item, index}) =>
            this.renderItem(item, index, () => {
              console.log('renderItem index:' + index);
              this.props.navigation.push('GankGirlPage', {
                girlIndex: index,
              });
              // this.props.addGirls(this.state.girls);
              // this.props.addGirl(item);
              // this.props.changeGirlPage(index);
            })
          }
          ListHeaderComponent={() => this.genHeader()}
          style={{marginBottom: 30}}
          keyExtractor={(item, index) => {
            return 'homelist' + index;
          }}
          onEndReachedThreshold={0.1}
          onEndReached={() => this.loadMore()}
        />
        <Text>2312ssddaa3</Text>
      </View>
    );
  }
}
