import React, {Component} from 'react';
import {View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';

export default class FullScreenImagePage extends Component {
  render() {
    console.log('link:' + this.props.link);
    return (
      <View style={styles.bg}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.pop();
          }}>
          <Image
            resizeMode="contain"
            source={{uri: this.props.link}}
            style={[styles.img]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#000000',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
