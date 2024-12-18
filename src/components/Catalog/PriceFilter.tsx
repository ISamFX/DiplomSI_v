import Nouislider from "nouislider-react";
import { FC } from "react";
import styled from "styled-components";
import "nouislider/distribute/nouislider.css";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FilterData } from "../../redux/sneakers/sneakSlice"

interface IProps  {
  setValue: UseFormSetValue<FilterData>;
  register: UseFormRegister<FilterData>;
}

const PriceFilter: FC<IProps> = ({ register, setValue }) => {
  return (
    <PriceFilterStyle>
      <div className="filter" id="slider">
        <input type="number" min={0} max={59999}  {...register("minPrice")} />
        <input type="number" min={0} max={59999} {...register("maxPrice")} />
        <Nouislider
          range={{ min: 0, max: 59999 }}
          start={[0, 59999]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([start, end]) => {
            setValue("minPrice", Math.round(start));
            setValue("maxPrice", Math.round(end));
          }}
        />
      </div>
    </PriceFilterStyle>
  );
};

const PriceFilterStyle = styled.div`
  color: #444B58;
  font-size: 16px;
  margin-bottom: -5px;

  .filter {    
    width: max-content;
    padding: 10px 20px 10px 20px;
    position: relative;
    top: 30px;
    left: 20px;
    border: 1px solid #444B58;
    border-radius: 4px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 34px;
      background-color: #444B58;
    }

    input {
      max-width: 190px;
      text-align: center;
      padding: 10px 10px 10px 12px;
      color: #444B58;
      background: #FFF4EE;
      border-right: none;
      border-left: none;
      border-bottom: none;
      border-top: none;
      border-radius: 4px;
    }
  }

  .noUi {
    &-target {
      width: 100%;
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      background: none;
      border: none;
      left: 0px;
    }

    &-horizontal {
      height: 4px;
    }

    &-connect {
      background: #444b58;
    }

    &-handle {
      width: 6px;
      height: 20px;
      background-color: #444b58;
      box-shadow: none;
      border: none;
      top: -8px;
      right: -3px;

      &::before {
        content: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export default PriceFilter;