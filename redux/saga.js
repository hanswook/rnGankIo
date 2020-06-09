import {call, put, select, takeLatest} from 'redux-saga/effects';
import actions from './actions';
import Http from '../base/Http';
import {getCurrentState} from './reducers';

// api/v2/data/category/Girl/type/Girl/page/1/count/10
function* fetchGirls({payload}) {
  let state = yield select(getCurrentState);
  let girlPage = state.girlPage;
  let girlIsLoading = state.girlIsLoading;
  if (girlIsLoading) {
    return;
  }
  yield put(actions.toggleGirlsLoading({girlIsLoading: true}));
  console.log('fetchGirls state:' + JSON.stringify(state));
  let result = yield call(
    Http.get,
    'api/v2/data/category/Girl/type/Girl/page/' + girlPage + '/count/10',
    {},
  );

  if (!result || result.error) {
    console.log(result && result.error && result.error.msg);
    // yield put(GlobalActions.toast(result && result.error && result.error.msg));
    yield put(actions.toggleGirlsLoading({girlIsLoading: false}));
  } else {
    if (result && +result.status === 100) {
      //当日可以注销
      yield put(actions.addGirls({girls: result.data}));
      yield put(actions.toggleGirlsLoading({girlIsLoading: false}));
      yield put(actions.changeGirlPage({girlPage: girlPage + 1}));
    } else {
      console.log(result && result.error && result.error.msg);
      yield put(actions.toggleGirlsLoading({girlIsLoading: false}));
    }
  }
}

function* fetchGirlsBanner() {
  try {
    let result = yield call(Http.get, 'api/v2/banners', {});
    if (result && result.data && result.data) {
      let data = result.data;
      yield put(actions.addGirlsBanner({bannerData: data}));
    }
  } catch (error) {
    console.log(error);
  }
  let state = yield select(getCurrentState);
  console.log('fetchGirls state:' + JSON.stringify(state));
}

export default function* () {
  // yield takeLatest(actions.addGirls, addGirls);
  yield takeLatest(actions.fetchGirls, fetchGirls);
  yield takeLatest(actions.fetchGirlsBanner, fetchGirlsBanner);
}
