import styled from "./style.module.scss"
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch,RootState } from "../../store";
import { ISneakers } from "../../redux/basket/basketSlice";
import { loadMore } from "../../redux/sneakers/sneakSlice"
import CatalogCard from "./CatalogCard ";

interface IProps {
  gender: string;
}

const CatalogItems: FC<IProps> = ({ gender }) => {
  const dispatch = useDispatch<AppDispatch>();
  const sneakers = useSelector<RootState, ISneakers[]>(
    (state) => state.sneak.data
  );
  
//--------------------------------------
    const { currentPage, totalPages } = useSelector((state: RootState) => ({
      currentPage: state.sneak.currentPage,
      totalPages: state.sneak.totalPages,
    }));
    const limit = totalPages * 6;
    const handleLoadMore = () => {
      if (currentPage < totalPages) {
        dispatch(loadMore());
        console.log(gender);
      }
    };
//------------------------------------
  return (
    <>

      <ul className={styled.product_cat_sneak}>
        {sneakers
          .filter((_, index) => index < limit)
          .map((item: ISneakers) => (
            <CatalogCard key={item.id} item={item} />
          ))}
      </ul>

      <div className={styled.pagination_container}>
      {currentPage < totalPages && (
        <button onClick={handleLoadMore} className={styled.btn_show}>
          Показать еще
        </button>
      )}
      </div>      
    </>
);
}
export default CatalogItems; 
