
import HomePageImage from "../assets/images/home-page-soap/home-page-image.png";

function HomeImage() {
    return (

        <div className = "relative flex justify-between items-center home-image">
            
        {/*Home Page Image*/}
            <img src={HomePageImage} alt="HomePageImage" className="home-page-image mx-auto w-full" />        
        {/*Text Over the Image*/} 
        <div class="absolute inset-0 flex flex-col items-center pt-6 text-white text-center pt-18">
            <h1 class="text-4xl md:text-5xl font-serif font-semibold">
            King’s Soap
            </h1>

            <p class="mt-4 text-base md:text-xl font-medium leading-relaxed">
            Enjoying the art of soap-making since 2016.
            </p>
            <p class="text-xl md:text-xl font-semibold">Hand-Made</p>
            <p class="text-xl md:text-xl font-semibold">Family-Owned</p>
        </div>
        {/*
        <div class="absolute inset-0 flex items-center justify-center">
            <p class="text-white text-4xl font-bold p-4  bg-opacity-50">
                Kings Soap
            </p>
            <p class="text-white text-4xl  p-4  bg-opacity-50">
                Kings Soap
            </p>
            
        </div>
        */}
        </div>
    
    );
}

export default HomeImage;