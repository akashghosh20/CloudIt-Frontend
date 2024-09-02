import Navber from '../navBer/navber';
import Footer from '../footer/footer';
import Stats from '../stats/stats';
import Tech from '../tech/tech';
import Whychooseus from '../whychooseus/whychooseus';
import Services from '../services/services';
import Faq from '../faq/faq';
import Packages from '../packages/packages';
import Map from '../map/map';
import Home2 from '../home/home2';



const Viewer = () => {
    return (
  <>
        <Navber/>
     <Home2/>
 <Stats/>
    <Tech></Tech>
    <div className='text-4xl font-bold my-8 text-center'>Our clients</div>
         <Map></Map>
<Packages></Packages>
         <Whychooseus></Whychooseus>
         <Services></Services>
        <Faq></Faq>
        <Footer></Footer> 
        </>
    );
};

export default Viewer;