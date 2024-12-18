import styled from "./style.module.scss"
import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import {  toast } from 'sonner'
import FormFirst from "./formfirst"
import FormSecond from "./formsecond"
import FormThird  from "./formthird"
import FormGet from "./formget"

type FormSelectData = {
    bootsChoice: string[];
    name: string;
    email: string;
  };

const Selection =() =>{
  const methods = useForm<FormSelectData>();
  const onSubmit = (data: FormSelectData) => {
    toast.success ('Запрос отправлен', {
      position: 'top-center',
      duration: 3000,        
      });
    console.log(data);    
    setTimeout(() => {
      methods.reset();
      setPage(1);
    }, 1000);
  };

  const [page, setPage] = useState(1);
  const nextPage = () => {setPage((prevPage) => prevPage + 1)};

  return (
   
    <>
    <div className={styled.select_container} id="select"> 
      {page !== 4 && (  
        <>
          <div className={styled.heading_container}>
            <div className={styled.heading}>
              <h4> Мы подберем идеальную пару для вас</h4>
            </div>
            <div>
            <p className={styled.txt_heading_container}>
                Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями 
                </p>     
            </div>
          </div>
          <div className={styled.line_blok1}></div>

         </> 
         
       )}    
      </div>
      <div >



        <FormProvider {...methods}>
          <form  
            onSubmit={methods.handleSubmit(onSubmit)} >
            {page === 1 && <FormFirst />}
            {page === 2 && <FormSecond />}
            {page === 3 && <FormThird />} 
            {page === 4 && <FormGet />} 
            <div className={styled.page_form_block}>
            </div>
          </form> 
        </FormProvider> 
            
        {page !== 4 && (
          <>
            <div className={styled.line_blok2}></div>
            <div>
              <p className={styled.page_counter}>{page} из 3</p>
              <button type="button" className={styled.button_next_form} onClick={nextPage}>
                      Следующий шаг
              </button>  
            </div>                                                      
          </>
        )}       
    </div>
    </>          
  );
}

export default Selection;