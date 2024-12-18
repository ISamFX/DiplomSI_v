import styled from "./style.module.scss"
import { FC } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FilterData } from "../../redux/sneakers/sneakSlice";

interface IProps {
  setValue: UseFormSetValue<FilterData>;
}

const genders = [
  {
    value: "Мужской",
    label: "male",
  },
  {
    value: "Женский",
    label: "female",
  },
];

const GenderFilter: FC<IProps> = ({ setValue }) => {
  return (
    
    <>
      <div className={styled.catalog_description1}>
             <p >Пол</p>
      </div> 
      <div className={styled.catalog_gender}>
        {genders.map((gender) => (
          <div key={gender.label}>
            <p className={styled.input_checkbox}> 
              <input className={styled.input_label}
                 type="radio"
                id={gender.label}
                name="gender"
                onChange={() => setValue("gender", gender.value)}
              />
            <label htmlFor={gender.label}>{gender.value}</label>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};


export default GenderFilter;