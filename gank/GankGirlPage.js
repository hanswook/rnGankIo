import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ViewPager from '../base/Components/ViewPager';
export default class GankGirlPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.bg}>
        {/* <Text>girl page{this.props.route.params.link}</Text> */}
        {/* {_renderItem(this.props)} */}
        {/* <Banner
          navigation={this.props.navigation}
          dataSource={this.props.girls}
          height={this.props.screenHeight}
          width={this.props.screenWidth}
        /> */}
        <ViewPager
          width={this.props.screenWidth}
          height={this.props.screenHeight}
          dataSource={this.props.girls}
          onClick={(item, index) => {
            onClick(item, index);
          }}
          index={this.props.girlIndex}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

function onClick(item, index) {
  console.log('onClick item:' + item + ',index:' + index);
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#000000',
  },
});
