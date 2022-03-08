import Image from "next/image";

const Products = ({ prods, addToCart }) => {
  return (
    <>
      {prods.map((prod) => {
        return (
          <div
            key={prod._id}
            className="p-5 py-12 text-left transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer bg-gray-200 rounded-xl hover:ring-medi hover:ring-2"
          >
            <span>
              <Image
                className="p-5"
                src={prod.image}
                alt={prod.slug}
                width={60}
                height={60}
                layout="responsive"
              />
            </span>
            <h1 className="text-base h-16 mt-4">{prod.title}</h1>
            <h2 className="font-semibold mb-4 mt-3">₹{prod.price}</h2>
            <button
              onClick={addToCart}
              id={prod.slug}
              className="p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-red-600"
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Products;
