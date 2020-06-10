import {connect} from 'react-redux';
import actions from '../redux/actions';
import GankGirlPage from './GankGirlPage';
import {Dimensions} from 'react-native';

export default connect(
  (state, ownProps) => {
    console.log('girlpage connect : ' + ownProps.route.params.girlPage);
    let screenWidth = Math.round(Dimensions.get('window').width);
    let screenHeight = Math.round(Dimensions.get('window').height);

    return {
      link: ownProps.route.params.link,
      navigation: ownProps.navigation,
      girls: state.girls,
      girlIndex: ownProps.route.params.girlIndex,
      screenWidth,
      screenHeight,
    };
  },
  (dispatch) => {
    return {
      aaa() {},
    };
  },
)(GankGirlPage);
