import styled from "../Hero/style.module.scss"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { ISneakers } from "../../redux/basket/basketSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch,RootState } from "../../store"
import { Link } from "react-router-dom"
import {  toast } from 'sonner'
import BasketList from "./BasketList"
import { delBasket} from "../../redux/basket/basketSlice"

interface IProps {
    setIsZakazOpen: () => void;  
}
type ZakazformData = {
  name: string;
  phone: string;
  email: string;
};

const ZakazBlock: FC<IProps> = ({ setIsZakazOpen }) => {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector<RootState, ISneakers[]>(
    (state) => state.basket.data
  );
  const {register, handleSubmit, reset, formState:{errors},} = useForm<ZakazformData>();

  const onSubmit = (data: ZakazformData) => {
    toast.success ('Заказ отправлен', {
      position: 'top-center',
      duration: 2000,        
      });
      console.log(data, items);
       reset();
       {items.map((item) => (
          dispatch(delBasket(item.id))
      ))};
      
       setIsZakazOpen();
       return (false);
  };
  
  if (items.length === 0) {
      toast.info ('Корзина пуста выбирите товар', {
        position: 'top-center',
        duration: 2000,        
        });
        setIsZakazOpen();
    return(false)};
 
  let j = "";
  let totalbasket = 0;
  for (j in items) {
    totalbasket += items[j].price;
  }
  // const totalbasket = items.reduce(
  //   // Аргумент sum является аккумулятором,
  //   // в нём храним промежуточное значение
  //   function (sum, current_items) {
  //     // Каждую итерацию берём текущее значение
  //     // и складываем его с текущем прайсем
  //     return sum + current_items.price
  //   },)
  return (
    <>
     <div className={styled.hero_modal_container} >
       <div className={styled.hero_back} ></div>
         <div className={styled.hero_zakaz}>
           <div className={styled.header_zakaz}>
               <h2 className={styled.txt_zakaz}> Оформление заказа</h2>
               <p className={styled.number_zakaz}> Заказ 3456 67</p>
           </div>
           <div className={styled.tovar_zakaz}>
               <p className={styled.txt_zakaz1}> Товаров в заказе: 
               <span className={styled.boldtxt_zakaz}> {items.length} шт.</span > </p>
               <p className={styled.txt_zakaz2}> Общая сумма заказа:
                <span className={styled.boldtxt_zakaz}> {totalbasket} ₽ </span> </p>
               <p className={styled.txt_zakaz3}>Состав заказа:</p>
               <div className={styled.items_zakaz}>
                <BasketList isBasketOpen />
               </div> 
           </div> 
           <div className={styled.intelligence_zakaz_form_block}>  
  
               <form className={styled.zakaz_form_block}                
               >
                   <input className={styled.input_zakaz_first}
                     id="name"
                     type="text"
                     placeholder="Ваше имя"
                     {...register("name", {required: "Имя обязательно"})}
                   />
                   {errors.name && (
                     <p className={styled.error_messag_f4}>{errors.name.message as string}</p>
                   )}

                   <input className={styled.input_zakaz_second}
                     id="phone"
                     type="tel"
                     placeholder="Номер телефона"
                     {...register("phone", {required: "Номер телефона обязателен",
                         pattern: { value: /^[0-9]+$/,
                         message: "Номер телефона должен содержать только цифры",
                         },
                     })}
                   />
                   {errors.phone && <p className={styled.error_messag_f4}>{errors.phone.message}</p>}

                   <input className={styled.input_zakaz_third }
                     id="email"
                     type="email"
                     placeholder="E-mail"
                     {...register("email", {
                       required: "Электронная почта обязательна",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Электронная почта должна содержать @",
                     },
                     })}
                   />
                   {errors.email && (
                     <p className={styled.error_messag_f4}>{errors.email.message as string}</p>
                   )}
                 <div className={styled.zakaz_btn_modal2}> 
                    <Link to={`/diplomsi/basket/`}>
                        <button type="submit" className={styled.modal_button} 
                         onClick={handleSubmit(onSubmit)} >
                           Оформить заказ
                       </button>
                   </Link> 
                </div>  
               </form>  
           </div> 
         </div>                 
     </div>
   </>
 );
};



export default ZakazBlock;
