import React, {Component} from 'react';
import {View, Text, NativeModules} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class CameraHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text
          style={{margin: 20, padding: 20}}
          onPress={() => {
            NativeModules.ToastModule.showToast();
          }}>
          222333
        </Text>
        <Text
          style={{margin: 20, padding: 20}}
          onPress={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image) => {
              console.log(image);
            });
          }}>
          select
        </Text>
        <Text
          style={{width: 200, height: 200, margin: 20, padding: 20}}
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 400,
              cropping: true,
            }).then((image) => {
              console.log(image);
            });
          }}>
          take photo
        </Text>
      </View>
    );
  }
}

export default CameraHome;
