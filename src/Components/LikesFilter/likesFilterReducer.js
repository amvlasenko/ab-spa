import {OFF_LIKES_FILTER, ON_LIKES_FILTER} from '../../app/types';

const initialState = {
   likesFilter: false
};

export const likesFilterReducer = (state = initialState, action) => {
   switch (action.type) {
      case ON_LIKES_FILTER:
         return {...state, likesFilter: action.payload};
      case OFF_LIKES_FILTER:
         return {...state, likesFilter: action.payload};
      default:
         return state;
   }
};

