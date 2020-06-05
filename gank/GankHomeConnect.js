import {connect} from 'react-redux';
import actions from '../redux/actions';
import GankGirlHome from './GankGirlHome';

export default connect(
  (state) => {
    return {
      girls: state.girls,
      girlPage: state.girlPage,
    };
  },

  (dispatch) => {
    return {
      addGirl(girl) {
        dispatch(actions.addGirl({girl}));
      },
      addGirls(girls) {
        dispatch(actions.addGirls({girls}));
      },
      changeGirlPage(girlPage) {
        dispatch(actions.changeGirlPage({girlPage}));
      },
    };
  },
)(GankGirlHome);
