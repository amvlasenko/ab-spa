import {ADD_LIKE, FETCH_PHOTOS, REMOVE_LIKE, REMOVE_PHOTO} from '../../app/types';

export const fetchPhotos = () => {
   return async (dispatch) => {
      fetch(`https://picsum.photos/v2/list?page=5&limit=10`)
         .then((response) => response.json())
         .then((data) => {
            data.forEach((d) => d.liked = false)
            dispatch({type: FETCH_PHOTOS, payload: data})
         });
   };
};

export const removePhoto = (id) => {
   return (dispatch) => {
      dispatch({type: REMOVE_PHOTO, payload: id})
   };
};

export const addLike = (id) => {
   return (dispatch) => {
      dispatch({type: ADD_LIKE, payload: id})
   };
};

export const removeLike = (id) => {
   return (dispatch) => {
      dispatch({type: REMOVE_LIKE, payload: id})
   };
};