import {ADD_LIKE, FETCH_PHOTOS, REMOVE_LIKE, REMOVE_PHOTO} from '../../app/types';

const initialState = {
   photosList: []
};

export const photosReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_PHOTOS:
         return {...state, photosList: action.payload};
      case ADD_LIKE:
         return {...state, photosList: state.photosList.map((p) => {
            if (p.id === action.payload) {
               p.liked = true;
               return p
            } else {
               return p
            }
            })};
      case REMOVE_LIKE:
         return {...state, photosList: state.photosList.map((p) => {
               if (p.id === action.payload) {
                  p.liked = false;
                  return p
               } else {
                  return p
               }
            })};
      case REMOVE_PHOTO:
         return {...state, photosList: state.photosList.filter((p) => p.id !== action.payload)};
      default:
         return state;
   }
};

