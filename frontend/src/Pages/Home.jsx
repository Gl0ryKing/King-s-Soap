import MyCarousel from "../components/MyCarousel";
import RouteButton from "../components/RouteButton";
import HomeImage from "../components/HomePageImage";
import supabase from "../supabaseClient";

 {/*Pull image from database*/}
const getImageUrl =  (imagePath) => {
  const { data } = supabase.storage
    .from("Product Images")
    .getPublicUrl(imagePath);
    return data.publicUrl;
};


const Home = () => {

  const PopularItem1 = [
    getImageUrl("images/Aqua/Aqua 1.png"),
    getImageUrl("images/Aqua/Aqua 2.png"),
    getImageUrl("images/Aqua/Aqua 3.png")
  ];

  const PopularItem2 = [
    getImageUrl("images/All Natural, Green Goddess/AMGG 1.png"),
    getImageUrl("images/All Natural, Green Goddess/AMGG 2.png"),
    getImageUrl("images/All Natural, Green Goddess/AMGG 3.png")
  ];

  const PopularItem3 = [
    getImageUrl("images/Pink BM/Pink BM 1.png"),
    getImageUrl("images/Pink BM/Pink BM 2.png"),
    getImageUrl("images/Pink BM/Pink BM 3.png")
  ];

  const PopularItem4 = [
    getImageUrl("images/Salt Air & Honeydew/SAH 1.png"),
    getImageUrl("images/Salt Air & Honeydew/SAH 3.png")
  ];

  const PopularItem5 = [
    getImageUrl("images/Tangerine, Rose & Blackcurrant/TRB 1.png"),
    getImageUrl("images/Tangerine, Rose & Blackcurrant/TRB 2.png"),
    getImageUrl("images/Tangerine, Rose & Blackcurrant/TRB 3.png")
  ];

  const PopularItem6 = [
    getImageUrl("images/What A Man C/WAMC 1.png"),
    getImageUrl("images/What A Man C/WAMC 2.png"),     
    getImageUrl("images/What A Man C/WAMC 3.png")
  ];

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

