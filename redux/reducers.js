import {handleActions} from 'redux-actions';

import actions from './actions';

const initialState = {
  girls: [],
  girlPage: 1,
  girlIsLoading: false,
  bannerData: [],
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
        girls: [...state.girls, ...payload.girls],
      };
    },
    [actions.changeGirlPage](state, {payload}) {
      return {
        ...state,
        girlPage: payload.girlPage,
      };
    },
    [actions.toggleGirlsLoading](state, {payload}) {
      return {
        ...state,
        girlIsLoading: payload.girlIsLoading,
      };
    },
    [actions.addGirlsBanner](state, {payload}) {
      return {
        ...state,
        bannerData: payload.bannerData,
      };
    },
  },
  initialState,
);

export const getCurrentState = (state) => state;
