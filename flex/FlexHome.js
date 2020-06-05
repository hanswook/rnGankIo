import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class FlexHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.flexItem} selectable={true}>
          1111111
        </Text>
        <Text style={styles.flexItem}>2222222</Text>
        <Text style={styles.flexItem}>3333333</Text>
        <Text style={styles.flexItem}>4444444</Text>
        <Text style={styles.flexItem}>5555555</Text>
        <Text style={styles.flexItem}>6666666666</Text>
        <Text style={styles.flexItem}>7777777</Text>
        <Text style={styles.flexItem2}>8888888</Text>
        <Text
          style={styles.flexItem2}
          numberOfLines={1}
          ellipsizeMode={'tail'}
          onLongPress={() => {
            Alert.alert('点点点');
          }}>
          9999999000000111000000111000000111000000111000000111
        </Text>
        {/* <Text style={styles.flexItem}>1010101</Text> */}
        <Text style={styles.flexItem} selectable={true}>
          000000111
        </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={{flex: 1}}>
              <Text
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={{flex: 1}}>
                sss
              </Text>
            </View>
            <View style={styles.modalContainerTop}>
              <View>
                <Text
                  onPress={() => {
                    Alert.alert('sss');
                  }}>
                  Hello World!
                </Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <Text>dianwo</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback
          onPress={() => {
            Alert.alert('sss');
          }}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={{width: 150, height: 100, backgroundColor: '#991102'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#33ff33',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'space-between',
    height: '100%',
  },
  flexItem: {
    padding: 10,
    width: '40%',
    margin: 2,
    backgroundColor: '#0022fe',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    fontWeight: 'normal',
  },
  flexItem2: {
    padding: 10,
    backgroundColor: '#fe22fe',
    alignSelf: 'flex-start',
  },
  modalContainerTop: {
    flex: 1,
    width: '100%',
    backgroundColor: '#066f77',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default FlexHome;
