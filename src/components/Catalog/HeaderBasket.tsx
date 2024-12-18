import busketimg from "../../icons/Vector.svg"
import styled from "../Hero/style.module.scss"

import { useSelector } from "react-redux"
import { RootState } from "../../store";
import { FC } from "react"

interface IProps {
    isOpen: boolean;
    setIsOpen: () => void;
    setIsBasketOpen: () => void;
    setIsZakazOpen: () => void;
  
  }

const HeaderBasket: FC<IProps> = ({ setIsBasketOpen,   setIsZakazOpen }) => {
    const basketCount = useSelector<RootState, number>(
        (state) => state.basket.data.length
    );
    
    
    return ( 
      <> 
            <button className={styled.basket_bnt} onClick={() => setIsBasketOpen()}>
                    Корзина 
                    <img src={busketimg} alt="Корзина" />
                    <span className={styled.basket_bnt_counter}>{basketCount}</span>
            </button>

            <div className={styled.btn_hero_block}>                        
          
                <button className={styled.btn_hero} onClick={() => setIsZakazOpen()}>
                    Перейти к покупкам
                </button>
        
            </div>


</>
);
}

export default HeaderBasket;