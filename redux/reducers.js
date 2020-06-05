import {handleActions} from 'redux-actions';

import actions from './actions';

const initialState = {
  girls: [],
  girlPage: 1,
};

export default handleActions(
  {
    [actions.addGirl](state, {payload}) {
      return {
        ...state,
        girls: [...state.girls, {...payload.girl}],
      };
    },
    [actions.addGirls](state, {payload}) {
      return {
        ...state,
        girls: {
          ...state.girls,
          ...payload.girls,
        },
      };
    },
    [actions.changeGirlPage](state, {payload}) {
      return {
        ...state,
        girlPage: payload.girlPage,
      };
    },
  },
  initialState,
);
