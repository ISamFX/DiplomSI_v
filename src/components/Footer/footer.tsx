import styled from "./style.module.scss"
import { Link } from "react-scroll"

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


const Footer =() => {
  return (
    <footer className={styled.Footer}>
        <nav> 
             <p className={styled.footer_logo}>SneakMax</p>                 
              <ul className={styled.nav_list}>
                 {navList.map((item) => (
                  <li className={styled.nav_bnt}>
                    <Link to={item.id} spy={true} smooth={true} offset={50} duration={1500} className={styled.nav_bnt}>
                       {item.title}
                    </Link> 
                  </li>
                ))}                    
              </ul> 
        </nav>
    </footer>
  );
}

export default Footer;
