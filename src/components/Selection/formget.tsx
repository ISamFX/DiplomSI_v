import styled from "./style.module.scss"
import { useState } from "react"
import { useFormContext } from "react-hook-form"

function FormGet() {
  const [isShow, setShow] = useState(false);
  const showSubmit = () => {setShow(true);};

  const {formState:{errors}, register} = useFormContext();

  return (
    
    <div className={styled.select_container_f4}>
      <div className={styled.heading_container_f4}> 
        <h4>Ваша подборка готова! </h4>
      </div> 
      <div className={styled.txt_container_f4}>
        <p >
            Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог {isShow}
        </p>
      </div>
      <div className={styled.line_blok_f4}></div>
      <div className={styled.form_containerf4}>     
            <div className={styled.heading_messag_f4}>
                <h4>Получить предложение</h4>
            </div>
            <div className={styled.text_messag_f4}>
                <p> Получите подборку подходящих для вас моделей на почту
                </p>
            </div>
            <div className={styled.input_block_f4}>
              <input className={styled.input1_container_f4}
                id="name"
                type="text"
                placeholder="Ваше имя"
                {...register("name", {required: "Имя обязательно"})}
              />
              {errors.name && (
                <p className={styled.error_messag_f4}>{errors.name.message as string}</p>
              )}
              <input className={styled.input2_container_f4}
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
              <div className={styled.input_submit_f4}>
                <button type="submit" onClick={() => showSubmit()} className={styled.f4_submit}>
                    Получить
                </button> 
                
              </div>
            </div>    
      </div>
    </div>
  );
}

export default FormGet;