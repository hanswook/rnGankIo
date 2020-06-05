import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
export default class GankGirlPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.bg}>
        {/* <Text>girl page{this.props.route.params.link}</Text> */}
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.pop();
          }}>
          <Image
            resizeMode="contain"
            source={{uri: this.props.route.params.link}}
            style={styles.img}
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
    // maxHeight: '100%',
    // maxWidth: '100%',
  },
});
