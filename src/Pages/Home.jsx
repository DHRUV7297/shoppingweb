import ProductCard from "../components/ProductCard";
import FeatureBar from "../components/Feature";

import products from "../data/Product";

function Home() {
  return (
    <div className="bg-gray-200 min-h-screen items-center">
      <div className="bg-gray-200 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center w-full h-full">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-7xl font-extrabold text-gray-900 leading-tight">
              Brand New <br /> Collection
            </h1>

            <p className="text-gray-600 text-xl max-w-md">
              Mauris vitae ultricies leo integer malesuada tempor orci dapibus
              ultrices diam in arcu cursus euismod purus viverra accumsan.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-8 text-gray-700 font-medium">
              <div className="flex items-center gap-2 text-xl ">
                ✔ <span>Top Brands</span>
              </div>

              <div className="flex items-center gap-2 text-xl">
                ✔ <span>High Quality</span>
              </div>

              <div className="flex items-center gap-2 text-xl">
                ✔ <span>Free Delivery</span>
              </div>
            </div>

            {/* Button */}
            <button className="bg-red-500 text-white px-10 py-5 mt-8 font-semibold hover:bg-red-600 transition">
              EXPLORE SHOP
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center">
            <img
              src="/Shopping.jpg"
              alt="Fashion"
              className="w-full max-w-lg "
            />
          </div>
        </div>

      </div>
        <div>
            <FeatureBar />
        </div>
        <div className="bg-gray-100 py-10 px-16">
          {/* Heading */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold">New Arrivals</h1>

            <button className="border px-5 py-2">VIEW ALL</button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    </div>
  );
}

export default Home;
