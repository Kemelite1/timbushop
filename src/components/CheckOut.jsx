import { FaPaypal, FaCcMastercard, FaCcVisa, FaStripe } from 'react-icons/fa'

const CheckOut = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-neutral-50 p-4">
        <main className="space-y-8">
          <section className="text-center">
            <h2 className="text-2xl font-bold text-gray-700">Checkout</h2>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-700">Shipping details</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <input type="text" placeholder="First name*" className="flex-1 border rounded-md p-2" />
                <input type="text" placeholder="Last name*" className="flex-1 border rounded-md p-2" />
              </div>
              <input type="text" placeholder="Enter address*" className="w-full border rounded-md p-2" />
              <div className="flex space-x-4">
                <input type="email" placeholder="Email address*" className="flex-1 border rounded-md p-2" />
                <input type="tel" placeholder="Phone number*" className="flex-1 border rounded-md p-2" />
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-lg font-bold text-gray-700">Payment details</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Name on card*" className="w-full border rounded-md p-2" />
              <input type="text" placeholder="Card number*" className="w-full border rounded-md p-2" />
              <div className="flex space-x-4">
                <input type="text" placeholder="Expiry date*" className="flex-1 border rounded-md p-2" />
                <input type="text" placeholder="CVC code*" className="flex-1 border rounded-md p-2" />
              </div>
            </div>
          </section>
          <button className="w-full bg-cyan-700 text-white py-2 rounded-md font-semibold">Purchase items</button>
          <section>
            <h3 className="text-lg font-bold text-gray-700">Your order summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-base text-neutral-950">Subtotal</span>
                <span className="text-base font-bold text-stone-800">NGN 360,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-neutral-950">Delivery Fees</span>
                <span className="text-base font-bold text-stone-800">NGN 3,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-neutral-950">Estimated Tax</span>
                <span className="text-base font-bold text-stone-800">NGN 0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base text-neutral-950">Total</span>
                <span className="text-base font-bold text-stone-800">NGN 363,000</span>
              </div>
            </div>
            <p className="text-sm font-semibold">Delivery (3) - <span className="font-normal">2-5 business days once ordered</span></p>
          </section>

          <section className="flex justify-between items-center h-16">
      <p className="text-black text-sm font-semibold">We accept:</p>
      <div className="flex items-center gap-2">
        <FaPaypal className="w-8 h-8" />
        <FaCcMastercard className="w-8 h-8" />
        <FaCcVisa className="w-8 h-8" />
        <FaStripe className="w-8 h-8" />
      </div>
    </section>
        </main>
        
    
      </div>
  )
}

export default CheckOut