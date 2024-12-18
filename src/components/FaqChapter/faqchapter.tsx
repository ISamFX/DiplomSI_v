import styled from "./style.module.scss"
import FaqAccordion from "../Accordion/faqaccordion"

const FaqChapter =() => {
    return (
        <>
            <div className={styled.faqcontainer} id="questions">
               
            </div>  
            <h2 className={styled.Heading}>Часто задаваемые вопросы</h2> 
              
            <div className={styled.Group60}> 
                <FaqAccordion/>
            </div>        
        </>
        );
}

export default FaqChapter;