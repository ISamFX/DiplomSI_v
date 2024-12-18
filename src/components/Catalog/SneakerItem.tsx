import styled from "./style.module.scss"
import view from "../../icons/veiw.png"
import basket from "../../icons/appbasket.png"
import { SneakMember } from "../../redux/sneakers/sneakSlice"

type SneakerItemProps = {
  item: SneakMember;
  onViewSneak: (id: string) => void;
  onAddBasket: (item: SneakMember) => void;
};

function SneakerItem ({ item, onViewSneak, onAddBasket }: SneakerItemProps) {
  return (
    <li key={item.id} className={styled.list_sneakers}>
      <img src={item.imgUrl} alt={item.title} className={styled.catalog_image} />
      <div className={styled.overlay_buttons}>
        <button className={styled.overlay_buttons} onClick={() => onViewSneak(item.id.toString())}>
          <img className={styled.view_img_btn} src={view} alt="Просмотр" />
        </button>
        <button className={styled.overlay_buttons} onClick={() => onAddBasket(item)}>
          <img className={styled.basket_img_btn} src={basket} alt="Добавить" />
        </button>
      </div>
      <p className={styled.catalog_title}> {item.title}</p>
      <p className={styled.catalog_price}> {item.price} ₽</p>
    </li>
  );
}

export default SneakerItem;