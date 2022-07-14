import {useDispatch, useSelector} from 'react-redux';
import {offLikesFilter, onLikesFilter} from './likesFilterActions';

function LikesFilter() {
   const dispatch = useDispatch()
   const likesFilter = useSelector((state) => state.likesFilter.likesFilter);
   const clickLikesFilter = () => {
      if (likesFilter) {
         dispatch(offLikesFilter())
      } else {
         dispatch(onLikesFilter())
      }
   };
   return (
            <div className="switch container">
               <div className="lever">Показать посты</div>
               <label>
                  Все
                  <input type="checkbox" onChange={() => clickLikesFilter()}/>
                  <span className="lever"></span>
                  С лайками
               </label>
            </div>
   );
}

export default LikesFilter;