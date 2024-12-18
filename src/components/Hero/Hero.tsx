import styled from "./style.module.scss"
import { useState } from "react"
import { Link } from "react-scroll"
import HeaderBasket from "../Catalog/HeaderBasket"
import BasketBlock from "../Catalog/BasketBlock"
import ZakazBlock from "../Catalog/ZakazBlock"
                            // {/* // <li key={item.id} className={styled.nav_bnt} >
                            //     <a href={`#${item.id}`}>{item.title}</a>
                            // </li> */}


interface NavItem {
  title: string;
  id: string;
}

const navList: NavItem[] = [
  { title: "Каталог", id: "catalog" },
  { title: "О нас", id: "about" },
  { title: "Подбор товара", id: "select" },
  { title: "Наша команда", id: "team" },
  { title: "Доставка и оплата", id: "questions" },
  { title: "Контакты", id: "contacts" },
];

const Hero =() =>{
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);
    const [isZakazOpen, setIsZakazOpen] = useState<boolean>(false);

    const isOpenCallback = () => {setIsOpen(!isOpen);};

    const isBasketOpenCallback = () => {setIsBasketOpen(!isBasketOpen)};
    const isZakazOpenCallback = () => {setIsZakazOpen(!isZakazOpen)};

    return (         
        <div className={styled.hero_container}>
                <nav>                  
                    <p className={styled.logo}>SneakMax</p>
                    
                    
                    <ul className={styled.nav_list}> 
                        {navList.map((item) => ( 
                            <li className={styled.nav_bnt}>
                                <Link to={item.id} spy={true} smooth={true} offset={50} duration={1000} className={styled.nav_bnt}>
                                     {item.title}
                                </Link> 
                            </li>
                        ))}    
                    </ul> 
                    <HeaderBasket isOpen={isOpen}
                            setIsOpen={isOpenCallback}
                             setIsBasketOpen={isBasketOpenCallback}
                             setIsZakazOpen={isZakazOpenCallback}
                    />
                    {isBasketOpen && <BasketBlock setIsBasketOpen={isBasketOpenCallback}  />}
                    {isZakazOpen && <ZakazBlock   setIsZakazOpen={isZakazOpenCallback} />}
                </nav>
                <div className={styled.hero_textcontainer}> 
                    <h2 className={styled.hero_heading}>Кроссовки известных брендов с доставкой по России и СНГ</h2>
                    <p className={styled.hero_description}>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по
                    низким ценам</p>
                    <p className={styled.back_text}>SneakMax</p>
                </div>    
        </div>
    )
}

export default Hero;
