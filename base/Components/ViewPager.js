import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

export default class ViewPager extends Component {
  constructor(props) {
    super(props);
    this._runFocusItem = this._runFocusItem.bind(this);
  }

  componentDidMount() {
    setTimeout(
      function () {
        // this._runFocusItem(3);
        this._scrollView.scrollTo({
          x: this.props.index * this.props.width,
          animated: false,
        });
      }.bind(this),
      0,
    );
    // this._scrollView.scrollTo({x: 4 * this.props.width}, false);
  }
  _runFocusItem(nowIndex) {
    console.log('nowIndex:' + nowIndex);
    this._scrollView.scrollTo({x: nowIndex * this.props.width}, false);
  }

  render() {
    return (
      <View>
        {/* <Text style={{color: '#ffffff'}}>
          ViewPager width:{this.props.width}
          {'\n'}
          height:{this.props.height}
          {'\n'}
          dataSource:{this.props.dataSource.length}
        </Text> */}
        <ScrollView
          ref={(scrollView) => {
            this._scrollView = scrollView;
          }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {this.props.dataSource.map((value, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  this.props.navigation.pop();
                }}>
                <Image
                  source={{uri: value.url}}
                  style={{
                    width: this.props.width - 20,
                    height: this.props.height - 20,
                    margin: 10,
                  }}
                />
              </TouchableWithoutFeedback>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
