import { FaCreditCard, FaHeadset, FaTruck } from "react-icons/fa";
import { MdReplay } from "react-icons/md";

export default function Feature() {
  return (
    <div className="bg-black text-white py-12 px-16">
      <div className="grid grid-cols-4 gap-10 text-center">

        {/* Secure Payment */}
        <div className="space-y-3">
          <FaCreditCard className="text-4xl mx-auto" />
          <h3 className="font-semibold text-lg">Secure Payment</h3>
          <p className="text-gray-400 text-sm">
            100% secure payment
          </p>
        </div>

        {/* Return */}
        <div className="space-y-3">
          <MdReplay className="text-4xl mx-auto" />
          <h3 className="font-semibold text-lg">30 Days Return</h3>
          <p className="text-gray-400 text-sm">
            If goods have problems
          </p>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <FaHeadset className="text-4xl mx-auto" />
          <h3 className="font-semibold text-lg">24/7 Support</h3>
          <p className="text-gray-400 text-sm">
            Dedicated support
          </p>
        </div>

        {/* Delivery */}
        <div className="space-y-3">
          <FaTruck className="text-4xl mx-auto" />
          <h3 className="font-semibold text-lg">Free Delivery</h3>
          <p className="text-gray-400 text-sm">
            For all order over $80
          </p>
        </div>

      </div>
    </div>
  );
}