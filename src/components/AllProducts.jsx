import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://timbu-get-all-products.reavdev.workers.dev/?organization_id=81dc2b7b7c254735a85fb0304448ebdf&Appid=SMSOVG0P7404HZN&Apikey=dc079423633543efb7f78a7af61f106d20240713160831619860');
        const data = await response.json();
        setProductsList(data.items); 
        console.log(data.items)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product-detail/${product.id}`, { state: { product } });
  };

  const displayedProducts = windowWidth < 768 ? productsList.slice(0, 8) : productsList;

  return (
    <section className="px-4 md:px-20 py-32 flex flex-col items-center">
      <h1 className="text-center text-secondary1000 text-[32px] font-bold mb-12 leading-[38.4px]">Products</h1>
      {/* Filtering options or other UI elements can be added here */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {displayedProducts.map((product) => (
          <article
            key={product.id}
            className="w-full items-center gap-4 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            {product.photos && product.photos.length > 0 && (
              <img
                className="w-full h-48 md:h-64 object-cover rounded-lg"
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                
                
                alt={product.name}
              />
            )}



            <div className="text-center mt-4">
              <h2 className="text-stone-800 text-lg font-semibold">{product.name}</h2>
              {product.description && (
                <p className="text-stone-600 text-base">{product.description}</p>
              )}
              {product.current_price && product.current_price.length > 0 && (
                <p className="text-stone-800 text-lg font-semibold">
                  NGN {product.current_price[0].NGN[0]}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;