import MyCarousel from "../components/MyCarousel";
import Aqua1 from "../assets/images/Aqua/Aqua 1.png";
import Aqua2 from "../assets/images/Aqua/Aqua 2.png";
import Aqua3 from "../assets/images/Aqua/Aqua 3.png";
import AMGG1 from "../assets/images/All Natural, Green Goddess/AMGG 1.png";
import AMGG2 from "../assets/images/All Natural, Green Goddess/AMGG 2.png";
import AMGG3 from "../assets/images/All Natural, Green Goddess/AMGG 3.png";
import PBM1 from "../assets/images/Pink BM/Pink BM 1.png";
import PBM2 from "../assets/images/Pink BM/Pink BM 2.png";
import PBM3 from "../assets/images/Pink BM/Pink BM 3.png";
import SAH1 from "../assets/images/Salt Air & Honeydew/SAH 1.png";
import SAH2 from "../assets/images/Salt Air & Honeydew/SAH 2.png";
import SAH3 from "../assets/images/Salt Air & Honeydew/SAH 3.png";
import TRB1 from "../assets/images/Tangerine, Rose & Blackcurrant/TRB 1.png";
import TRB2 from "../assets/images/Tangerine, Rose & Blackcurrant/TRB 2.png";
import TRB3 from "../assets/images/Tangerine, Rose & Blackcurrant/TRB 3.png";
import WAMC1 from "../assets/images/What A Man C/WAMC 1.png";
import WAMC2 from "../assets/images/What A Man C/WAMC 2.png";
import WAMC3 from "../assets/images/What A Man C/WAMC 3.png";
import RouteButton from "../components/RouteButton";
import HomeImage from "../components/HomePageImage";

const Home = () => {

  const PopularItem1 = [Aqua1, Aqua2, Aqua3];
  const PopularItem2 = [AMGG1, AMGG2, AMGG3];
  const PopularItem3 = [PBM1, PBM2, PBM3];
  const PopularItem4 = [SAH1, SAH2, SAH3];
  const PopularItem5 = [TRB1, TRB2, TRB3];
  const PopularItem6 = [WAMC1, WAMC2, WAMC3];

  return (
  <div style={{ width: "100%", height: "100%"  }}>
  {/*<h1 className="text-4xl text-[#FFFFFF] font-[Inria_Serif] pl-11 pt-8"> Home </h1>*/}

  <HomeImage /> {/*Load HomePageImage, includes text over image*/}

 {/*Carousel for popular items*/}
 
    <div className="w-full flex justify-center pt-6">
    <div className="grid grid-cols-2 gap-6">
    <MyCarousel images={PopularItem1} description = "Aqua" buttonTo = "/Product1"/>

    <MyCarousel images={PopularItem2} description = "All Natural, Green Goddess" buttonTo = "/Product2"/>

    <MyCarousel images={PopularItem3} description = "Pink Berry Mimosa " buttonTo = "/Product3"/>

    <MyCarousel images={PopularItem4} description = "Salt Air & Honeydew" buttonTo = "/Product4"/>

    <MyCarousel images={PopularItem5} description = "Tangerine, Rose & Blackcurrant" buttonTo = "/Product5"/>

    <MyCarousel images={PopularItem6} description = "What A Man (w/activated charcoal) " buttonTo = "/Product6"/>
    </div>
    </div>
  </div>
  );
};
export default Home; 

 {/*Testing harks commits */}
