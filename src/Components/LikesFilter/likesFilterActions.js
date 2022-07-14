import {OFF_LIKES_FILTER, ON_LIKES_FILTER} from '../../app/types';

export const onLikesFilter = () => {
   return (dispatch) => {
      dispatch({type: ON_LIKES_FILTER, payload: true})
   };
};

export const offLikesFilter = () => {
   return (dispatch) => {
      dispatch({type: OFF_LIKES_FILTER, payload: false})
   };
};