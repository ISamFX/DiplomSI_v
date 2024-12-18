import styled from "./style.module.scss"
import InstLogo from "../../img/Instagram_logo.png"
import { useForm } from "react-hook-form"
import Rectangle37 from "../../img/Rectangle37.jpg"
import Rectangle38 from "../../img/Rectangle38.jpg"
import Rectangle39 from "../../img/Rectangle39.jpg"
import Rectangle40 from "../../img/Rectangle40.jpg"
import Rectangle41 from "../../img/Rectangle41.jpg"

type InstformData = {
    name: string;
    phone: string;
};

function Insta () {
    const {register, handleSubmit, reset, formState:{errors},} = useForm<InstformData>();
    const onSubmit = (data: InstformData) => {
        console.log(data);
        reset();
        return true;
    };
    return (
        <>
            <div className={styled.inpcontainer}>
             <div className={styled.heading_container}>
                <div>
                    <h2 className={styled.heading}>Есть вопросы?</h2>
                </div>
                <div>
                    <p className={styled.txt_heading_container}>
                        Заполните форму и наш менеджер свяжется с вами
                    </p>
                </div> 
             </div>  
            </div>     
            <div className={styled.question_form_block}>
                    <form className={styled.form_block}
                          onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <input className={styled.input_form_first}
                                id="name"
                                type="text"
                                placeholder="Ваше имя"
                                {...register("name", { required: "Имя обязательно" })}
                            />
                                {errors.name && <p className={styled.error}>{errors.name.message}</p>}
                          </div> 
                          <div>
                            <input className={styled.input_form_second}
                                id="phone"
                                type="tel"
                                placeholder="Номер телефона"
                                {...register("phone", {required: "Номер телефона обязателен",
                                    pattern: { value: /^[0-9]+$/,
                                    message: "Номер телефона должен содержать только цифры",
                                    },
                                })}
                            />
                                {errors.phone && <p className={styled.error}>{errors.phone.message}</p>}
                          </div>                           
                          <div>
                            <button type="submit" className={styled.form_submit}>
                                    Отправить
                            </button>
                          </div>
                    </form>
                </div>                        
            <img src={InstLogo} className={styled.inst_logo_image} alt="Instagram" />               
            <div className={styled.gap_container}>
                <div className={styled.container_foto}>
                    <div className={styled.foto1}>
                        <img className={styled.img_foto} src={Rectangle38} alt="Фото 1" />
                    </div>
                    <div className={styled.foto2}>
                        <img className={styled.img_foto} src={Rectangle37} alt="Фото 2" />
                    </div>
                    <div className={styled.foto3}>
                        <img className={styled.img_foto} src={Rectangle39} alt="Фото 3" />
                    </div>
                    <div className={styled.foto4}>
                        <img className={styled.img_foto} src={Rectangle40} alt="Фото 4" />
                    </div>
                    <div className={styled.foto5}>
                        <img className={styled.img_foto} src={Rectangle41} alt="Фото 5" />
                    </div>
                </div>
            </div>
        </>
        );
}

export default Insta;