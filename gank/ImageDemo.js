import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {Component} from 'react';
import axios from 'axios';
import Banner from './Banner';

class ImageDemo extends Component {
  constructor() {
    super();
  }

  state = {
    text: '',
  };

  ti1Change(text) {
    this.setState({
      text: text + 'x',
    });
  }

  testAxios() {
    console.log('test axios');
    axios
      .create()
      .get('https://gank.io/api/v2/banners')
      .then((res) => {
        console.log('test axios res:' + res.data.data[1].image);
      })
      .catch((error) => {
        console.log('test axios error:' + error);
      });
  }
  render() {
    let data = [{aa: '2'}, {aa: '3'}, {aa: '4'}, {aa: '5'}];
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Banner dataSource={data} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    fontSize: 12,
  },
  btnClick: {
    color: '#00dd00',
    width: 30,
    height: 20,
  },
});

export default ImageDemo;
