import {connect} from 'react-redux';
import actions from '../redux/actions';
import GankGirlHome from './GankGirlHome';

export default connect(
  (state) => {
    return {
      girls: state.girls,
      girlPage: state.girlPage,
      girlIsLoading: state.girlIsLoading,
      bannerData: state.bannerData,
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
      fetchGirls() {
        dispatch(actions.fetchGirls());
      },
      fetchGirlsBanner() {
        dispatch(actions.fetchGirlsBanner());
      },
    };
  },
)(GankGirlHome);
