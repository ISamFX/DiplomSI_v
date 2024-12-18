import styled from "./style.module.scss"
import { useFormContext } from "react-hook-form";
import Rectangle45 from "../../img/Rectangle45.png";


type FormData = {
    SizeSelect: string[];
};

type InputData = {
  value: string;
  id: string;
  text: string;
};

const inputData: InputData[] = [
  { value: "Менее 36",    id: "1", text: "Менее 36" },
  { value: "36-38",       id: "2", text: "36-38" },
  { value: "39-41",       id: "3", text: "39-41" },
  { value: "42-44",       id: "4", text: "42-44" },
  { value: "45 и больше", id: "5", text: "45 и больше" },
]

function SecondForm() {
  const { register } = useFormContext<FormData>();

  return (
    <>
    <div className={styled.form_block}>
      <p className={styled.select_question}>Какой размер вам подойдет?</p>
      <div className={styled.select_size}>
        {inputData.map((item) => (
          <div key={item.id} className={styled.select_size_item}>
            <p className={styled.input_checkbox}> 
                <input className={styled.input_label}
                    type="checkbox"
                    id={item.id}
                    value={item.value}              
                    {...register("SizeSelect" as const)}
                /> <label htmlFor={item.id}>{item.text}</label>
            </p> 
          </div>
        ))}
      </div>
      <div>
        <img src={Rectangle45} alt="Кроссовок" className={styled.imgRect45}/>
      </div>
    </div>
    </>
  );
}

export default SecondForm;

