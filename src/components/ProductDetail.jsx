import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useCart } from './CartContext';

const ProductDetail = () => {
  const { state } = useLocation(); // Destructure the state from the useLocation hook
  const { product } = state;
  const navigate = useNavigate(); 
  const { addToCart } = useCart(); // Get the addToCart function from the cart context

  // Function to handle closing the product detail page
  const handleClose = () => {
    navigate(-1); // Navigate to the previous page
  };

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-3xl flex flex-col md:flex-row items-center md:w-[1008px] md:h-[652px] md:top-[34.5px] md:left[48px] md:gap-[37px]">
      <img
        className="flex place-items-start rounded-xl"
        src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
        alt={product.name}
      />
      <div className="flex flex-col justify-start items-start gap-6 ml-0 md:ml-8 md:w-[671px] md:h-[652px] md:gap-[24px]">
        <div className="flex flex-col gap-6 md:w-[671px] md:h[556px]">
          {/* Product name and close icon */}
          <div className='md:w-[671px] md:h-[32px] md:flex justify-between'>
            <div className='md:w-[410px] md:h[29px]'>
              <h1 className="text-secondary1000 font-primary font-semibold md:leading[28.8px] md:text-[24px]">{product.name}</h1>
            </div>
            <div className='md:w-[32px] md:h-[32px]'>
              <FaTimes 
                className="relative text-4xl text-secondary1000 md:w-[16px] md:h-[16px] md:top-[8px] md:left-[8px] border-b items-center cursor-pointer"
                onClick={handleClose} // Add onClick to handle close
              />
            </div>
          </div>
          {/* End of product name and close icon */}

          {/* Product price and delivery fee */}
          <div className="flex flex-col gap-1 md:w[167px] md:h-[74px] md:gap[16px] ">
            <p className="text-secondary1000 font-primary font-bold md:text-[28px] md:leading-[33.6px]">{product.price}</p>
            <p className="text-[16px] items-center font-primary font-normal text-[#5C5C5C] md:leading-[24px] md:w-[187px] md:h-[24px]">Delivery fee NGN 1,000</p>
          </div>
          {/* End of product price and delivery fee */}

          <div className='md:w-[360px] md:h-[72px] md:gap-[16px]'>
            <p className="font-primary font-normal text-warning200 md:text-[16px] md:leading-[24px] md:w-[360px] md:h-[24px]">Few units left</p>
            <div className="flex items-center gap-[18px] md:w-[360px] md:h-[32px]">
              <div className="flex items-center md:gap-[8px] md:w-[192px] md:h-[32px]">
                <span className="w-8 h-8 md:w-[22.82px] md:h-[21.81px] md:top-[4.76px] md:left-[4.59px]"><FaStar className='text-[#ECBC12]'/></span>
                <span className="w-8 h-8 md:w-[22.82px] md:h-[21.81px] md:top-[4.76px] md:left-[4.59px]"><FaStar className='text-[#ECBC12]'/></span>
                <span className="w-8 h-8 md:w-[22.82px] md:h-[21.81px] md:top-[4.76px] md:left-[4.59px]"><FaStar className='text-[#ECBC12]'/></span>
                <span className="w-8 h-8 md:w-[22.82px] md:h-[21.81px] md:top-[4.76px] md:left-[4.59px]"><FaStar className='text-[#ECBC12]'/></span>
                <span className="w-8 h-8 md:w-[22.82px] md:h-[21.81px] md:top-[4.76px] md:left-[4.59px]"><FaStar className='text-neutral200' /></span>
              </div>
              <p className="text-secondary1000 font-primary font-normal md:w-[149px] md:h-[24px] md:text-[16px] leading-[24px]">(300 verified rating)</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:w-[671px] md:h-[85px]">
          <div className="flex flex-col md:gap-[24px] md:w-[230px] md:h-[85px]">
            <h2 className="text-2xl text-secondary1000 font-primary font-semibold md:leading-[28.8px] md:w-[230px] md:h-[29px]">Available sizes</h2>
            <div className="flex md:gap-[12px] md:w-[228px] md:h-[32px]">
              <span className="px-4 py-1 border border-neutral200 rounded text-base text-[#000000] hover:bg-primary cursor-pointer">37</span>
              <span className="px-4 py-1 border border-neutral200 rounded text-base text-[#000000] hover:bg-primary cursor-pointer">38</span>
              <span className="px-4 py-1 border border-neutral200 rounded text-base text-[#000000] hover:bg-primary cursor-pointer">39</span>
              <span className="px-4 py-1 border border-neutral200 rounded text-base text-[#000000] hover:bg-primary cursor-pointer">40</span>
            </div>
          </div>
          <p className="text-[16px] font-primary font-normal text-[#2260A9] md:text-[16px] leading-[24px]">Size Guide</p>
        </div>

        <div className="flex flex-col md:opacity-[0px] md:gap-[24px] w-[230px] md:h-[101px]">
          <h2 className="text-2xl font-primary font-semibold text-secondary1000 leading-[24px] md:w-[230px] md:h-[29px]">Quantity</h2>
          <div className="flex items-center border border-neutral200 md:w-[102px] md:h-[48px] rounded-sm">
            <select name="" id="" className='md:w-[66px] md:h-[29px] md:top-[9px] gap-[24px] md:left-[18px]'>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col md:w-[671px] md:h-[72px]'>
          <button
            onClick={handleAddToCart} //  onClick to handle add to cart
            className="bg-primary text-[#FFFFFF] font-primary text-2xl font-semibold py-3 px-6 rounded-lg leading-[28.8px] flex items-center"
          >
            <FaShoppingCart className='text-[#FAFAFA] mr-2' /> 
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
