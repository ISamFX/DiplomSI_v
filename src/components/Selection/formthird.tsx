import styled from "./style.module.scss"
import { useFormContext } from "react-hook-form";

function ThirdForm() {
  const {formState: { errors }, register,} = useFormContext();

  return (
    <>
    <div className={styled.form_block}>
      <p className={styled.select_question}>Уточните какие-либо моменты</p>
      <div className={styled.messag_container_f3}>
        <textarea className={styled.input_container_f3}
          {...register("details", {required: true})}
          placeholder="Введите сообщения"
        />
        {errors.details && <span>Это поле обязательно для заполнения</span>}
      </div>
    </div>  
    </>
  );
}

export default ThirdForm;
