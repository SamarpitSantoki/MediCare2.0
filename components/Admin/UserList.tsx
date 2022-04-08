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

const UserList = ({ users }) => {
  const [products, setProducts] = useState(users);

  // handle product filter
  const handleFilter = async (event) => {
    const cat = event.target.value;
    console.log(cat);
    const filtered_prods = await users.filter((item) => item.category === cat);
    setProducts(filtered_prods);
    return;
  };
  return (
    <main className="w-full pb-8">
      {/* <!--modal content--> */}
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Successful!
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Account has been successfully registered!
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              OK
            </button>
          </div>
        </div>
      </div>
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
          id="open-btn"
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
        {users.map((cat) => {
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

export default UserList;
