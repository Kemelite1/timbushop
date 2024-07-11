
import { useLocation, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { state } = useLocation(); //destructure the state from the useLocation hook
  const { product } = state;

  return (
    <section className="max-w-4xl mx-auto p-8 bg-white rounded-3xl flex flex-col md:flex-row items-center">
      <img
        className="w-72 h-72 md:w-96 md:h-96 rounded-xl"
        src={product.image}
        alt={product.name}
      />
      <div className="flex flex-col justify-start items-start gap-6 ml-0 md:ml-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-gray-700">{product.name}</h1>
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-bold text-gray-700">{product.price}</p>
            <p className="text-base text-zinc-600">Delivery fee NGN 1,000</p>
          </div>
          <p className="text-base text-orange-400">Few units left</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
            </div>
            <p className="text-base text-gray-700">(300 verified rating)</p>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-gray-700">Available sizes</h2>
            <div className="flex gap-3">
              <span className="px-4 py-1 border border-stone-300 rounded text-base text-black">37</span>
              <span className="px-4 py-1 border border-stone-300 rounded text-base text-black">38</span>
              <span className="px-4 py-1 border border-stone-300 rounded text-base text-black">39</span>
              <span className="px-4 py-1 border border-stone-300 rounded text-base text-black">40</span>
            </div>
          </div>
          <p className="text-base text-blue-800">Size Guide</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h2 className="text-2xl font-semibold text-gray-700">Quantity</h2>
          <div className="flex items-center border border-stone-300 rounded px-4 py-2">
            <span className="text-2xl text-stone-600">0</span>
          </div>
        </div>
        <button className="bg-cyan-700 text-white text-2xl font-semibold py-3 px-6 rounded-lg">
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;
