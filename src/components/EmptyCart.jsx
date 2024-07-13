import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="w-[396px] h-[379px] pb-10 bg-neutral-50 rounded-2xl flex-col justify-start items-center gap-10 inline-flex">
      <header className="self-stretch h-[70px] pl-6 pr-[297px] py-6 rounded-tl-3xl rounded-tr-3xl border-b border-neutral-200 justify-start items-center inline-flex">
        <h2 className="text-gray-700 text-lg font-bold font-['Plus Jakarta Sans'] leading-snug">Carts(0)</h2>
      </header>
      <div className="self-stretch flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-24 h-24 pl-[19.50px] pr-[20.50px] py-5 bg-slate-200 rounded-[360px] justify-center items-center inline-flex">
          <FaShoppingCart className="w-14 h-14 relative flex-col justify-start items-start flex" />
        </div>
        <p className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">You have no items in your cart</p>
        <Link to="/productspage" className="px-6 py-3.5 bg-cyan-700 rounded-md justify-center items-center gap-2.5 inline-flex">
          <span className="text-white text-base font-semibold font-['Plus Jakarta Sans'] leading-tight">Start shopping</span>
        </Link>
      </div>
    </section>
  );
}

export default EmptyCart;
