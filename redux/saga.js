import {call, put, takeLatest} from 'redux-saga/effects';
import actions from './actions';
function* addGirl({payload}) {
  console.log('saga addGirl:' + JSON.stringify(payload.girl));
}

function* addGirls({payload}) {
  console.log('saga addGirls:' + JSON.stringify(payload.girls));
}

function* changeGirlPage({payload}) {
  console.log('sagachangeGirlPage:' + payload.girlPage);
}
export default function* () {
  yield takeLatest(actions.addGirl, addGirl);
  yield takeLatest(actions.addGirls, addGirls);
  yield takeLatest(actions.changeGirlPage, changeGirlPage);
}
