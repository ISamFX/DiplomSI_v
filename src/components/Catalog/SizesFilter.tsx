import styled from "./style.module.scss"
import { FC, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FilterData } from "../../redux/sneakers/sneakSlice"

const sizesData = ["35", "36", "37", "38", "39", "40", "41", "42", "43"];

interface IProps {
  setValue: UseFormSetValue<FilterData>;
}

const SizesFilter: FC<IProps> = ({ setValue }) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const handleSizeChange = (size: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      const newSizes = prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size];
      setValue("sizes", newSizes);
      console.log(newSizes,selectedSizes);
      return newSizes;
    });
  };

  return (
    <>
      <p className={styled.catalog_description2}>Размер</p>

      <ul className={styled.filter_size}>
        {sizesData.map((size) => (
          <li key={size}>
            <input 
              type="checkbox"
              id={size.toString()}
              name="sizes"
              onChange={() => handleSizeChange(size)}
            />
            <label htmlFor={size.toString()}>{size.toString()}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SizesFilter;
