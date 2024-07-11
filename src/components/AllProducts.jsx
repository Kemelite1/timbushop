import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image1 from '../assets/images/s1.png';
import Image2 from '../assets/images/s2.png';
import Image3 from '../assets/images/s3.png';
import Image4 from '../assets/images/s4.png';
import Image5 from '../assets/images/s5.png';
import Image6 from '../assets/images/s6.png';
import Image7 from '../assets/images/s7.png';
import Image8 from '../assets/images/s8.png';
import Image9 from '../assets/images/s9.jpg';
import Image10 from '../assets/images/s10.jpg';
import Image11 from '../assets/images/s11.jpg';
import Image12 from '../assets/images/s12.jpg';
import Image13 from '../assets/images/s13.jpg';
import Image14 from '../assets/images/s14.jpg';
import Image15 from '../assets/images/s15.jpg';
import Image16 from '../assets/images/s16.jpg';
import Image17 from '../assets/images/s17.jpg';
import Image18 from '../assets/images/s18.jpg';
import Image19 from '../assets/images/s19.jpg';
import Image20 from '../assets/images/s20.jpg';

const AllProducts = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    { id: 1, image: Image1, name: 'Nike Court Legacy Lift', description: 'Women’s Shoe', price: 'NGN 120,000' },
    { id: 2, image: Image2, name: 'Nike Dunk Low', description: 'Men’s Shoe', price: 'NGN 140,000' },
    { id: 3, image: Image3, name: 'Nike Air Max 270', description: 'Little Kids Shoe', price: 'NGN 80,000' },
    { id: 4, image: Image4, name: 'Ozmillen Shoes', description: 'Women’s Shoe', price: 'NGN 200,000' },
    { id: 5, image: Image5, name: 'New Balance', description: 'Unisex Shoe', price: 'NGN 250,000' },
    { id: 6, image: Image6, name: 'Gazelle Bold Shoe', description: 'Women’s Shoe', price: 'NGN 300,000' },
    { id: 7, image: Image7, name: 'Nike Force 1 low EasyOn', description: 'Little Kids Shoe', price: 'NGN 80,000' },
    { id: 8, image: Image8, name: 'Lite Racer Adapt 7.0 Wide', description: 'Men’s Shoe', price: 'NGN 70,000' },
    { id: 9, image: Image9, name: 'Sabrina 2', description: 'Women’s Shoe', price: 'NGN 95,000' },
    { id: 10, image: Image10, name: 'Nike Dunk Low Premium', description: 'Women’s Shoe', price: 'NGN 122,000' },
    { id: 11, image: Image11, name: 'Nike V2K Run', description: 'Women’s Shoe', price: 'NGN 250,000' },
    { id: 12, image: Image12, name: 'Ozmillen Shoes', description: 'Women’s Shoe', price: 'NGN 120,000' },
    { id: 13, image: Image13, name: 'New Balance 9060', description: 'Women’s Shoe', price: 'NGN 198,000' },
    { id: 14, image: Image14, name: 'Samba OG Shoes Kids', description: 'Kids Shoe', price: 'NGN 92,000' },
    { id: 15, image: Image15, name: 'KD17 x Alchemist', description: 'Men’s Shoe', price: 'NGN 500,000' },
    { id: 16, image: Image16, name: 'CA Pro Classic Sneakers', description: 'Little Kids Shoe', price: 'NGN 80,000' },
    { id: 17, image: Image17, name: 'Fresh Foam X 880v14', description: 'Women’s Shoe', price: 'NGN 120,000' },
    { id: 18, image: Image18, name: 'Nike Vomero 5', description: 'Big kid’s Shoe', price: 'NGN 55,000' },
    { id: 19, image: Image19, name: 'Nike Air Max 270', description: 'Little Kids Shoe', price: 'NGN 400,000' },
    { id: 20, image: Image20, name: 'KAPTIR 3.0 SHOES', description: 'Women’s Shoe', price: 'NGN 380,000' },
  ];

  const handleProductClick = (product) => {
    navigate(`/product-detail/${product.id}`, { state: { product } });
  };

  const displayedProducts = windowWidth < 768 ? products.slice(0, 8) : products;

  return (
    <section className="px-4 md:px-20 py-32 flex flex-col items-center">
      <h1 className="text-center text-secondary1000 text-[32px] font-bold mb-12 leading-[38.4px]">Products</h1>
      <div className="w-full max-w-[644px] h-[88px] p-2 bg-[#F1F1F1] rounded-[10px] flex justify-center items-center mb-12">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex-1 p-2 bg-white rounded-md flex justify-center items-center">
            <p className="text-black text-[24px] font-normal">All Brands</p>
          </div>
          <div className="flex-1 p-2 rounded-md flex justify-center items-center">
            <p className="text-black text-2xl font-normal">Nike</p>
          </div>
          <div className="flex-1 p-2 rounded-md flex justify-center items-center">
            <p className="text-black text-2xl font-normal">Adidas</p>
          </div>
          <div className="flex-1 p-2 rounded-md flex justify-center items-center">
            <p className="text-black text-2xl font-normal">Puma</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {displayedProducts.map((product) => (
          <article
            key={product.id}
            className="w-full items-center gap-4 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img className="w-full h-48 md:h-64 object-cover rounded-lg" src={product.image} alt={product.name} />
            <div className="text-center mt-4">
              <h2 className="text-stone-800 text-lg font-semibold">{product.name}</h2>
              <p className="text-stone-600 text-base">{product.description}</p>
              <p className="text-stone-800 text-lg font-semibold">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
