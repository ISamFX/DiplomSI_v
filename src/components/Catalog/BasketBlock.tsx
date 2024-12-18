import styled from "../Hero/style.module.scss"

import { FC } from "react"
import { useSelector } from "react-redux";
import { ISneakers } from "../../redux/basket/basketSlice";
import { RootState } from "../../store";

import { Link } from "react-router-dom"
import BasketList from "./BasketList"

interface IProps {
  setIsBasketOpen: () => void;
  
}


const BasketBlock: FC<IProps> = ({ setIsBasketOpen }) => {
  
  const items = useSelector<RootState, ISneakers[]>(
    (state) => state.basket.data
  );
  // const totalbasket = items.reduce(
  //   // Аргумент sum является аккумулятором,
  //   // в нём храним промежуточное значение
  //   function (sum, current_items) {
  //     // Каждую итерацию берём текущее значение
  //     // и складываем его с текущем прайсем
  //     return sum + current_items.price
  //   },)

  let j = "";
  let talbasket = 0;
  for (j in items) {
    talbasket += items[j].price;
  }
  
  return (
    <>
      <div className={styled.hero_modal_container} >
        <div className={styled.hero_back} ></div>
          <div className={styled.hero_basket}>
            <BasketList isBasketOpen />
                <p className={styled.itog}> Итого:</p>
                <p className={styled.itogsumma}> {talbasket}</p>
                <div className={styled.btn_modal}> 
                      <Link to={`/diplomsi/basket/`}>
                          <button className={styled.modal_button} onClick={() => setIsBasketOpen()}>
                              Перейти в корзину
                          </button>
                       </Link> 
                </div>           
          </div>       
        
      </div>
    </>
  );
};



export default BasketBlock;
