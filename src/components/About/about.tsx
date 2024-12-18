import styled from "./style.module.scss"
import figure from "../../img/figure.svg"
import line6 from "../../img/Line6.png"
import MaskGroup from "../../img/MaskGroup.png"


const About =() => {
  return (
    <div>
        <div className={styled.container} id="about">
            <img  src={figure} alt="круги" className={styled.aboutFigure}/>       
        </div>
        <div>
            <h2 className={styled.Heading}>Пара слов о нас</h2>
        </div>
        <div>
            <p className={styled.Description}>Спорт держит нас в форме. 
                Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни.
                 В том числе с помощью воодушевляющих историй спортсменов.
                  Чтобы помочь тебе подняться и двигаться вперед. 
                </p>
        </div>
        <div className={styled.Logo_container}>
           <img  src={line6}  alt="линия" />
            <div className={styled.Logo}>
                <p >SneakMax</p>
            </div> 
        </div>
        <div className={styled.MaskGroup}>
          <img src={MaskGroup} alt="фото кроссовок"  />
        </div>
    </div>
  );
}

export default About;