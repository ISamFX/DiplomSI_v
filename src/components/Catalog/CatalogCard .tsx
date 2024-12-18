import styled from "styled-components";

import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { ISneakers, postBasket } from "../../redux/basket/basketSlice";
import { AppDispatch } from "../../store";
import appbasket from "../../icons/appbasket.png"
import view from "../../icons/veiw.png"

interface IProps {
  item: ISneakers;
}

const CatalogCard: FC<IProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <CatalogCardStyle
          $isOpenModal={isOpenModal}
          onClick={() => setIsOpenModal((prev) => !prev)}>

        <div className={isOpenModal ? "modal modal-open" : "modal"}>
              <picture>
                  <img src={item.imgUrl} alt={item.title}  onClick={() => setIsOpenModal((prev) => !prev)}/>
              </picture>
             
                <div className="options">
                        <button  >
                            <img src={ view} alt="просмотр" />
                        </button>
                        <button>
                            <img src={appbasket} onClick={() => dispatch(postBasket(item))} alt="добавить в корзину" />
                        </button>
                </div>
          
            <p className="catalog_title"> {item.title}</p>
          
            <p className="catalog_price"> {item.price} ₽</p>
           
      </div>
    </CatalogCardStyle>
  );
};

const CatalogCardStyle = styled.li<{ $isOpenModal: boolean }>`
  .modal {
    position: relative;
  }

  .options {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background: rgba(255, 255, 255, 0.6);
    opacity: 0;
    transition: all 200ms linear;

    button {
      width: 80px;
      height: 80px;
      background-color: var(--text);
      border-radius: 50%;

      @media (min-width: 810px) {
        &:hover {
          background-color: rgb(49, 52, 60);
        }
      }
    }
  }

  @media (min-width: 810px) {
    &:hover .options {
      opacity: 1;
    }
  }

  @media (max-width: 810px) {
    .options {
      opacity: ${(props) => (props.$isOpenModal ? 1 : 0)};
    }
  }

  picture {
    max-width: 280px;
    height: 293px;
    display: inline-block;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h3 {
    margin-bottom: 6px;
    color: rgb(68, 75, 88);
    font-size: 16px;
    line-height: 19px;
  }

  p {
    color: rgb(68, 75, 88);
    font-family: "Intro", sans-serif;
    font-size: 20px;
    line-height: 20px;
  }
  .catalog_title {
    margin-bottom: 10px;
    font-family: 'Intro Book';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
  
    color: #444B58;
  }

  catalog_price {


    font-family: 'Intro Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #444B58;
  }
`;



export default CatalogCard;
