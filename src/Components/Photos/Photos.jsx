import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPhotos} from './photosActions';
import PhotoCard from '../PhotoCard/PhotoCard';
import LikesFilter from '../LikesFilter/LikesFilter';

function Photos() {
   const dispatch = useDispatch();
   const photosList = useSelector((state) => state.photosList.photosList);
   const likesFilter = useSelector((state) => state.likesFilter.likesFilter);

   useEffect(() => {
      dispatch(fetchPhotos());
   }, []);

   return (
      <ul>
         <LikesFilter/>
         {likesFilter
            ? photosList.length > 0
               ? photosList.filter((photo) => photo.liked === true).map((photo) =>
                  <PhotoCard key={photo.id} photo={photo}/>
               )
               : <span>Загрузка</span>
            : photosList.length > 0
               ? photosList.map((photo) =>
                  <PhotoCard key={photo.id} photo={photo}/>
               )
               : <span>Загрузка</span>
         }

      </ul>
   );
}

export default Photos;