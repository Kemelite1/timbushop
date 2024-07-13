import { Link } from "react-router-dom";
import { useCart } from './CartContext';

const ProductCart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const price = item.price ? parseInt(item.price.replace('NGN ', '')) : 0;
    return total + price;
  }, 0);

  return (
    <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-full pb-36 bg-neutral-50 rounded-2xl flex flex-col justify-start items-center gap-12 mx-auto">
      <header className="w-full h-16 pl-6 py-6 rounded-t-3xl border-b border-neutral-200 flex items-center">
        <h2 className="text-black text-lg font-bold">Cart ({cartItems.length})</h2>
      </header>
      <div className="w-full flex flex-col gap-8 px-6">
        {cartItems.map((product) => (
          <article key={product.id} className="flex flex-col md:flex-row gap-4">
            <img className="w-36 h-36 rounded-md" src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} />
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-700 text-base font-semibold">{product.name}</h3>
              <p className="text-gray-700 text-lg font-bold">{product.price}</p>
              <p className="text-stone-600 text-base">Seller: <span className="text-black">Timbu Cloud</span></p>
              <p className="text-stone-600 text-base">Size: <span className="text-black">40</span></p>
              <div className="pl-3 pr-3 py-2 rounded-md border border-neutral-950 flex justify-center items-center">
                <span className="text-neutral-950 text-xs">1</span>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="text-amber-600 text-base">Remove</button>
            </div>
          </article>
        ))}
      </div>
      <section className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-[434px] pb-14 bg-neutral-50 rounded-2xl flex flex-col justify-start items-center gap-12">
        <header className="w-full h-16 pl-6 py-6 rounded-t-3xl border-b border-neutral-200 flex items-center">
          <h2 className="text-black text-lg font-bold">Cart Summary</h2>
        </header>
        <div className="w-full h-[260px] flex flex-col gap-8 px-6">
          <div className="w-full h-[180px] flex flex-col gap-6">
            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-950 text-base">Subtotal</span>
                <span className="text-right text-stone-800 text-base font-bold">NGN {subtotal}</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-950 text-base">Delivery Fees</span>
                <span className="text-right text-stone-800 text-base font-bold">NGN 1,000</span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-950 text-base">Estimated Tax</span>
                <span className="text-right text-stone-800 text-base font-bold">NGN 0.00</span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-neutral-950 text-base">Total</span>
              <span className="text-right text-stone-800 text-base font-bold">NGN {subtotal + 1000}</span>
            </div>
          </div>
          <Link to="/checkout">
            <button className="w-11/12 pt-4 pb-3.5 bg-cyan-700 rounded-md text-white text-base font-semibold">
              Checkout
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProductCart;
