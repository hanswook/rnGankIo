import {connect} from 'react-redux';
import Child from '../FullScreenImagePage';

export default connect(
  (state, ownProps) => {
    return {
      link: ownProps.route.params.link,
      navigation: ownProps.navigation,
    };
  },
  (dispatch) => {
    return {
      aaa() {},
    };
  },
)(Child);
