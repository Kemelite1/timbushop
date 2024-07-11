import HeroImage from '../assets/images/heroimg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="h-screen bg-herobg flex justify-center items-center pt-[120px] px-4 md:px-0">
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-center items-center">
        {/* Adjusted layout and added responsive classes */}
        <div className="w-full md:w-[1104px] h-auto flex flex-col justify-start items-start gap-8 md:order-1 order-2">
          <div className="w-full md:w-[595px] h-auto flex flex-col justify-start items-start gap-8">
            <h1 className="text-secondary1000 text-[32px] md:text-[56px] font-Plus Jakarta Sans font-bold leading-tight md:leading-[67.2px]">
              Timbu Cloud Shop: The Freshest Kicks on the Block
            </h1>
            <p className="text-gray-700 text-lg md:text-[28px] font-normal font-Plus Jakarta Sans leading-tight md:leading-[33.60px]">
              Shop for men, women, and kids at affordable rates
            </p>
            <div className="h-[72px] px-8 md:px-12 py-[23px] bg-primary rounded-[10px] flex justify-center items-center gap-2.5">
              <Link to='/productspage' className="text-white text-lg md:text-2xl font-semibold font-Plus Jakarta Sans leading-tight md:leading-[28.80px]">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img className="w-full md:w-[439px] h-auto rounded-3xl md:order-2 order-1 mb-8 md:mb-0" src={HeroImage} alt="Hero" />
        {/* Adjusted layout and added responsive classes */}
      </div>
    </div>
  );
};

export default Hero;
