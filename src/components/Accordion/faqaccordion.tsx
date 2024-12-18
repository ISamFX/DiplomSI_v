import styled from './style.module.scss'
import { SetStateAction, useState } from 'react'
import { Data } from "../../constants/datafaq"
import FiPlus from "../../icons/+.png"
import FiX from "../../icons/x.png"

const FaqAccordion = () => {     
  const [clicked, setClicked] = useState(Number);

  function toggle(findex: SetStateAction<number>) {
    if (clicked === findex) {
      //if clicked question is already active, then close it
      return setClicked(-100);
    }
    setClicked(findex);
  };

  return (
      <div className={styled.AccordionSection}>
        <div className={styled.container_accord}>
          {Data.map((item) => {
            return (
              <>
                <div className={styled.Wrap} onClick={() => toggle(item.id)} key={item.id}>
                  <h1>{item.title}</h1>
                  <span>{clicked === item.id ? 
                    <img  src={FiX} alt="крест"/>  : 
                    <img  src={FiPlus} alt="плус"/>}</span>
                </div>
                {clicked === item.id ? (
                  <div className={styled.Dropdown}>
                    <p>{item.text}</p>
                  </div>
                ) : false}
              </>
            );
          })}
        </div>
      </div>
  );
};

export default FaqAccordion;