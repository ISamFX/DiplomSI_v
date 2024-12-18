
import styled from "./style.module.scss"
import { useState } from "react"
import CatalogFilter from "./CatalogFilter"
import CatalogItems from "./CatalogItems"
import { useEffect } from "react";
import { fetchSneak } from "../../redux/sneakers/sneakSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";


const CatalogS =() => {

  const [gender, setGender] = useState<string>("");
   
//------------------------------------
const dispatch = useDispatch<AppDispatch>();
useEffect(() => {
  dispatch(
    fetchSneak({
      minPrice: 0,
      maxPrice: 99999,
      gender: gender,
      sizes: [],
    })
  ), [dispatch, gender ] 
});
//------------------------------------

  return (
    <>
          <div className={styled.container_catalog} id="catalog">
                <h4 className={styled.heading_cat}>Каталог</h4>
          </div> 
          <div className={styled.product_cat}> 
                  <CatalogFilter setGender={setGender} /> 
                  <CatalogItems gender={gender} /> 
          </div>       
    </>
    );
  }


export default CatalogS;
