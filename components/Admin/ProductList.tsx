import {
  PlusIcon,
  FilterIcon,
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
const ProductList = ({ prods, cats }) => {
  const [products, setProducts] = useState(prods);

  // handle product filter
  const handleFilter = async (event) => {
    const cat = event.target.value;
    console.log(cat);
    const filtered_prods = await prods.filter((item) => item.category === cat);
    setProducts(filtered_prods);
    return;
  };
  return (
    <main className="flex-1 pb-8">
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
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="authentication-modal"
        >
          Toggle modal
        </button>

        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
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
                  Sign in to our platform
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    className="text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
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
        <tbody>
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
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      <PencilIcon className="w-6 h-6 fill-current" />
                    </button>
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      <TrashIcon className="w-6 h-6 fill-current" />
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
    </main>
  );
};

export default ProductList;
