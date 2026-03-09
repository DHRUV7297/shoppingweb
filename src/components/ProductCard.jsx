export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-5 relative group">

      {/* SALE Badge */}
      {product.sale && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
          SALE
        </span>
      )}

      {/* Product Image */}
      <div className="bg-gray-100 flex justify-center items-center h-64">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-2">

        <h2 className="font-semibold text-lg">{product.name}</h2>

        {/* Price */}
        <div className="flex gap-2">
          <span className="font-semibold">${product.price}</span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="text-orange-400 text-sm">
          ★★★★☆
        </div>

        {/* Category */}
        <p className="text-xs text-gray-500 uppercase">
          {product.category}
        </p>

        {/* Add to Cart */}
        <button className="bg-red-500 text-white px-6 py-2 mt-2 hover:bg-red-600">
          Add to cart
        </button>

      </div>
    </div>
  );
}