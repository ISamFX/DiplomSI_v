
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/footer"
import About from "./components/About/about"
import Team from "./components/Team/team"
import FaqChapter from "./components/FaqChapter/faqchapter"
import Contacts from "./components/Contacts/contacts"
import Insta from "./components/Insta/insta"
import Selection from "./components/Selection/selectform"
import CatalogS from "./components/Catalog/CatologS"
import { Toaster} from 'sonner'


function App() {
 
    return ( 
    <>
       <Toaster richColors/>
      <div>
        <Hero/>  
        <CatalogS /> 
        <About />
        <Selection/>
        <Team />
        <FaqChapter />
        <Contacts />
        <Insta />S
        <Footer/>
      </div>   
    </>  
      )
};

export default App;

