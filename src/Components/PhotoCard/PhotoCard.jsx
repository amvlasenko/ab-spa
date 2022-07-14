import classes from './PhotoCard.module.css';
import {useDispatch} from 'react-redux';
import {addLike, removeLike, removePhoto} from '../Photos/photosActions';
function PhotoCard(props) {
   const dispatch = useDispatch()
   const photo = props.photo
   const isLiked = photo.liked
   const clickLike = () => {
      if (isLiked) {
         dispatch(removeLike(photo.id))
      } else {
         dispatch(addLike(photo.id))
      }
   }
   return (
      <li className="container">
         <div className={`col ${classes.customContainer}`}>
            <div className="card">
               <div className="card-image">
                  <img src={photo.download_url} alt="Упс, что-то пошло не так"/>
               </div>
               <div className="card-content">
                  <span>Author: {photo.author}</span>
               </div>
               <div className="card-action">
                  <button className="btn-floating" onClick={() => clickLike()}>
                     {isLiked
                     ?  <i
                           className="material-icons">
                           favorite
                        </i>
                     : <i
                           className="material-icons">
                           favorite_border
                        </i>
                     }
                  </button>
                  <button className="btn right" onClick={() => dispatch(removePhoto(photo.id))}>Удалить</button>
               </div>
            </div>
         </div>
      </li>
   )
}

export default PhotoCard