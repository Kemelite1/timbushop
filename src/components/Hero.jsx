import HeroImage from '../assets/images/heroimg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className=" bg-herobg flex justify-center items-center px-4 md:px-0">
      <div className="w-[428px] h-[703px] top-[119px] flex flex-col md:flex-row justify-center items-center md:w-[1280px] md:h[707px] md:top-[125px]">
        {/* Adjusted layout and added responsive classes */}
        <div className="w-full md:w-[1104px] h-auto flex flex-col justify-start items-start gap-8 md:order-1 order-2">
          <div className="w-full md:w-[595px] h-auto flex flex-col justify-start items-start gap-8">
            <h1 className=" pt-4 px-2 text-secondary1000 font-primary font-bold leading-[33.60px] w-[366px] h-[102px] text-[28px] md:text-[56px] md:w-[595px] md:h-[201px] md:leading-[67.2px]">
              Timbu Cloud Shop: The Freshest Kicks on the Block
            </h1>
            <p className="hidden lg:block text-secondary1000 text-lg md:text-[28px] font-normal font-primary leading-tight md:leading-[33.60px]">
              Shop for men, women, and kids at affordable rates
            </p>
            <div className="mb-20 h-[72px] px-8 md:px-[48px] md:py-[23px] md:gap-[10px] bg-primary rounded-[10px] flex justify-center items-center gap-2.5 md:w-[216px] md:h-[72px]">
              <Link to='/productspage' className=" w-[120px] h-29px text-navbg text-lg md:text-2xl font-semibold font-primary md:leading-[28.80px] ">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img className="w-[396px] h-[397px] mt-10 md:w-[439px] rounded-3xl md:order-2 order-1 md:mb-0 " src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;