import styled from "./style.module.scss"
import React, { useState } from "react"
import Instagram from "../../icons/Instagram.svg"
import vk from "../../icons/VK.svg"
import Question from "../../icons/question.png"
import Ellipse11 from "../../img/Ellipse11.png"
import Fon from "../../img/Rectangle42.png"
import Tooltip from "../../img/Tooltip.png"
import type {YMapLocationRequest} from '@yandex/ymaps3-types';

export const LOCATION: YMapLocationRequest = {
  center: [37.623082, 55.75254], // starting position [lng, lat]
  zoom: 9 // starting zoom
};

const Contacts: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <div className={styled.container} id="contacts">
                 <img  src={Fon} alt="фон" className={styled.Fon}/>     
            </div>
            <div>
                <h2 className={styled.Heading}>Контакты</h2>
                <p className={styled.text1}>Главный офис</p>
                        <button onMouseOver={() => setIsHovered(true)}
                                onMouseOut={() => setIsHovered(false)}>
                            <img  src={Question} alt="Вопрос" className={styled.Question}/>
                            <img  src={Ellipse11} alt="Эллипс" className={styled.Ellipse11}/>
                        </button>
                        {isHovered && (                        
                        <img  src={Tooltip} alt="Пояснение" className={styled.Tooltip}/>
                        )}
                <h2 className={styled.text2}>+7 800 789 89 89</h2>
                <p className={styled.text3}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
                <p className={styled.text4}>отдел продаж</p>
                <h2 className={styled.text5}>+7 800 789 89 89</h2>
                <p className={styled.text6}>г. Санкт-Петербург, Комсомольская, 43 к1</p>  
                <img  src={vk} alt="VK" className={styled.iconVK}/> 
                <img  src={Instagram} alt="Instagram" className={styled.iconInstagram}/>  
                <div className={styled.MapYA}>
                    <a href="https://yandex.ru/maps/?um=constructor%3A221f5f82c8512287e34ca4047f87417b935e9b5c40a892654d03c24352f957a8&source=constructorLink"
                        className={styled.text7}>
                        Санкт‑Петербург
                    </a>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A221f5f82c8512287e34ca4047f87417b935e9b5c40a892654d03c24352f957a8&amp;source=constructor" width="680" height="497" frameBorder="0"></iframe>            
                </div>
            </div>
        </div>
    )
}

export default Contacts;

