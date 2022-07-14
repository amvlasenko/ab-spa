import {combineReducers} from '@reduxjs/toolkit';
import {photosReducer} from '../Components/Photos/photosReducer';
import {likesFilterReducer} from '../Components/LikesFilter/likesFilterReducer';

export const rootReducer = combineReducers({
   photosList: photosReducer,
   likesFilter: likesFilterReducer,
});