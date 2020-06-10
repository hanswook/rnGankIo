import React, {Component} from 'react';
import {
  TouchableWithoutFeedback,
  DeviceEventEmitter,
  Image,
  View,
  ScrollView,
  Text,
  Alert,
} from 'react-native';
import {navigation} from '@react-navigation/native';

// export default
export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource,
      _index: 0,
      height: props.height,
      width: props.width,
    };
    // const screenHeight = Math.round(Dimensions.get('window').height);
    this.image = this.state.dataSource.map((value, i) => {
      return (
        <BannerImage
          key={i}
          width={this.props.width}
          height={this.props.height}
          dataModel={{
            photoUrl: value.image,
            targetTo: i,
          }}
          navigation={this.props.navigation}
        />
      );
    });
  }

  _runFocusItem() {
    let _max = this.props.dataSource.length;
    if (_max <= 1) {
      return;
    }
    this._timer = setInterval(
      function () {
        let nowIndex = this.state._index;
        nowIndex++;
        if (nowIndex >= _max) {
          nowIndex = 0;
        }
        this.setState({
          _index: nowIndex,
        });
        this._scrollView.scrollTo({x: nowIndex * this.props.width}, true);
      }.bind(this),
      3000,
    );
  }

  componentDidMount() {
    this._runFocusItem();
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          height: this.state.height,
          width: this.state.width,
        }}>
        <ScrollView
          ref={(scrollView) => {
            this._scrollView = scrollView;
          }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {this.image}
        </ScrollView>
      </View>
    );
  }
}

class BannerImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataModel: props.dataModel,
      width: props.width,
      height: props.height,
      navigation: props.navigation,
    };
  }

  handleClick(link) {
    console.log('link:' + link);
    DeviceEventEmitter.emit('checkBannerDetail', link);
    this.state.navigation.push('FullScreenImagePage', {link: link});
  }

  render() {
    return (
      //无视觉反馈的点击控件
      //        <TouchableWithoutFeedback
      //         onPress =
      //         {() => {this.handleClick(this.state.dataModel.targetTo)}} >
      //        <Image
      //        source={{uri:this.state.dataModel.photoUrl}}
      //        style={{width:this.state.width,height:this.state.height}}/>
      //    </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => this.handleClick(this.state.dataModel.photoUrl)}>
        <Image
          source={{uri: this.state.dataModel.photoUrl}}
          style={{width: this.props.width, height: '100%'}}
        />
      </TouchableWithoutFeedback>
    );
  }
}
