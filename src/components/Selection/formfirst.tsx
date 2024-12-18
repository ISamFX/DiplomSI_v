import styled from "./style.module.scss"
import sneaker from "../../img/sneaker.jpg"
import { useFormContext } from "react-hook-form"

type FormDate = {
  SneakerSelect: string[];
};
type InputDate = {
  value: string;
  id: string;
  text: string;
};
const inputDate: InputDate[] = [
  { value: "saeaker1", id: "sneaker1", text: "1" },
  { value: "sneaker2", id: "sneaker2", text: "2" },
  { value: "sneaker3", id: "sneaker3", text: "3" },
  { value: "sneaker4", id: "sneaker4", text: "4" },
  { value: "sneaker5", id: "sneaker5", text: "5" },
  { value: "sneaker6", id: "sneaker5", text: "6" },
]

function FirstForm () {
  const { register } = useFormContext<FormDate>();

  return (
    <>
    <div className={styled.form_block}>
      <p className={styled.select_question}>Какой тип кроссовок рассматриваете?</p>
      <div className={styled.select_sneaker_gap}>  
        {inputDate.map((_item) => (                                              
              <div className={styled.sneaker_item}>
                <img src={sneaker} alt="Кроссовок" />
                <div className={styled.input_discrishion}>    
                  <p className={styled.input_checkbox}> 
                    <input className={styled.input_label}
                    type="checkbox"
                    {...register("SneakerSelect" as const)}
                      value = {_item.value}
                      id = {_item.id} /> 
                  <label htmlFor={_item.id}>Кеды</label>
                  </p>
                </div> 
              </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        ))}  
      </div>
    </div>  
    </>
  );
}

export default FirstForm;





