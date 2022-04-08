import {
  FilterIcon,
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

const ProductList = ({ prods, cats }) => {
  const [products, setProducts] = useState(prods);
  const [edit, setEdit] = useState(null);
  const [modal, setModal] = useState(null);

  // handle product filter
  const handleFilter = async (event) => {
    const cat = event.target.value;
    console.log(cat);
    const filtered_prods = await prods.filter((item) => item.category === cat);
    setProducts(filtered_prods);
    return;
  };

  return (
    <main className="relative w-full pb-8">
      {/* <!--modal content--> */}

      {modal && (
        <div
          id="edit_prod"
          className="absolute w-1/3 left-1/3 top-52 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <div className="flex justify-end p-2">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form
            className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
            action="#"
          >
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit Product
            </h3>
            <div>
              <label
                htmlFor="product"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Product
              </label>
              <input
                type="text"
                name="product"
                id="product"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                defaultValue={edit?.title}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Category
              </label>
              <input
                type="text"
                name="Category"
                id="Category"
                defaultValue={edit?.category}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                defaultValue={edit?.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="desc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Description
              </label>
              <input
                type="text"
                name="desc"
                id="desc"
                defaultValue={edit?.desc}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                defaultValue={edit?.image}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}

      <div className="flex items-center justify-between py-7 px-10">
        <div>
          <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
            Products
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Let&apos;s grow to your business! Create your product and upload
            here
          </p>
        </div>
        {/* <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
          <PlusIcon className="w-6 h-6 fill-current" />
          <span className="text-sm font-semibold tracking-wide">
            Create Item
          </span>
        </button> */}

        <button
          className="bg-medi-200 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-medi-100 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => setModal(true)}
        >
          Add New
        </button>
        <div
          className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        ></div>
      </div>
      {/* display categories here */}
      <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
        {cats.map((cat) => {
          return (
            <li key={cat._id}>
              <button
                className="flex gap-x-2 items-center py-5 px-6 
                w-full text-gray-500 hover:text-indigo-600 relative group font-medium"
                value={cat.slug}
                onClick={(event) => handleFilter(event)}
              >
                {cat.title}
                <span className="absolute w-full h-0.5 left-0 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
              </button>
            </li>
          );
        })}
      </ul>

      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <td className="pl-10">
              <span> {"  "}</span>
              <div className="flex items-center gap-x-4">
                <span>Product Name</span>
              </div>
            </td>
            <td className="py-4 px-4 text-center">Pricing</td>
            <td className="py-4 px-4 text-center">Orders</td>
            <td className="py-4 pr-10 pl-4 text-center">
              <FilterIcon className="w-6 h-6 fill-current" />
            </td>
          </tr>
        </thead>
        <tbody className="w-fit">
          {products.map((prod) => {
            return (
              <tr
                key={prod._id}
                //loop for diff products
                className="hover:bg-gray-100 transition-colors group"
              >
                <td className="flex gap-x-4 items-center py-4 pl-10">
                  <Image
                    src={prod.image}
                    alt="Product"
                    height="100px"
                    width="100px"
                    className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  />
                  <div>
                    <a href="#" className="text-lg font-semibold text-gray-700">
                      {prod.title}
                    </a>
                    <div className="font-medium text-gray-400">
                      {" "}
                      {prod.category}{" "}
                    </div>
                  </div>
                </td>
                <td className="font-medium text-center"> ₹{prod.price} </td>
                <td className="font-medium text-center"> product.Orders </td>

                <td className="pr-2">
                  <span className="inline-block w-20 group-hover:hidden">
                    product.createdAt
                  </span>
                  <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                    <button
                      onClick={async () => {
                        if (modal === true) {
                          setModal(false);
                          console.log(edit);
                        }
                        setEdit(prod);
                        console.log(edit);
                        setModal(true);
                      }}
                      className="p-2 hover:rounded-md hover:bg-gray-200"
                    >
                      <PencilIcon className="w-6 h-6 fill-current" />
                    </button>
                    <button className="p-2 hover:rounded-md hover:bg-gray-200 z-1">
                      <TrashIcon
                        name={prod.slug}
                        className="w-6 h-6 fill-current z-0"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex gap-x-2 justify-center pt-8">
        <button className="flex justify-center items-center w-8 h-8">
          <ChevronLeftIcon className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
        </button>
        <button
          v-for="i in 6"
          //loop for pagination of the page
          className="flex items-center justify-center w-8 h-8 font-medium rounded-full"
        >
          Pagination
        </button>
        <button className="flex justify-center items-center w-8 h-8">
          <ChevronRightIcon className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
        </button>
      </div>
      <Script
        strategy="afterInteractive"
        src="https://unpkg.com/flowbite@latest/dist/flowbite.js"
      />
    </main>
  );
};

export default ProductList;
