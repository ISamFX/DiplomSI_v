
import styled from "./style.module.scss"
import { FC } from "react";
import PriceFilter from "./PriceFilter";
import GenderFilter from "./GenderFilter";
import SizesFilter from "./SizesFilter";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSneak, FilterData } from "../../redux/sneakers/sneakSlice";
import { AppDispatch } from "../../store";
import { loadMore } from "../../redux/sneakers/sneakSlice"


interface IProps {
  setGender: (gender: string) => void;
}

const CatalogFilter: FC<IProps> = ({ setGender }) => {

  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, setValue, reset } = useForm<FilterData>({
    // Устанавливаем начальные значения для полей формы.
    defaultValues: {
      minPrice: 1,
      maxPrice: 59999,
      gender: "",
      sizes: [],
    },
  });

  const onSubmit: SubmitHandler<FilterData> = (data) => {
    setGender(data.gender);
    console.log(data);
    // Вызываем асинхронный экшен `fetchSneakers`, передавая ему объект с параметрами фильтрации:
    dispatch(
      fetchSneak({
        minPrice: data.minPrice,
        maxPrice: data.maxPrice,
        gender: data.gender,
        sizes: data.sizes,
      })      
    );
  };

  return (

    <form   onSubmit={handleSubmit(onSubmit)} >
      <div  className={styled.filter}> 
        <div className={styled.find_catalog}>
            <h4 >Подбор <br></br> по параметрам</h4> 
        </div>
        <div className={styled.txt_find_catalog}>
            <p >Цена, руб</p>
        </div> 
        <PriceFilter register={register} setValue={setValue} />
        <GenderFilter setValue={setValue} />
        <SizesFilter setValue={setValue} />
        <div className={styled.catalog_btns}>
            <button  type="submit" className={styled.catalog_btn} 
                     onSubmit = {() =>  dispatch(loadMore())} >
                Применить
            </button>
            <button className={styled.catalog_reset} type="reset"
                      onClick={() => { reset ({
                                        minPrice: 2,
                                        maxPrice: 59899,
                                        gender: "",
                                        sizes: []});
                                      dispatch(
                                        fetchSneak({
                                          minPrice: 3,
                                          maxPrice: 59799,
                                          gender: "",
                                          sizes: []}));
                                      setValue("minPrice", 2);
                                      setValue("maxPrice", 59899);
                                      window.location.reload()  
                                    }
                              }           
              > 
                Сбросить
            </button>        
        </div>    
      </div>
    </form>
  );
};


export default CatalogFilter;


