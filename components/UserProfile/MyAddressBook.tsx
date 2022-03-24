import axios from "axios";
import { useState } from "react";

const MyAddressBook = () => {
  // const [address, setAddress] = useState([]);

  return (
    <div>
      <div className="mt-10 pd-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Your Addresses
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a address where you can receive delivery.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {/* display user addresses here by mapping over it */}
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Street Address
                  </th>
                  <th scope="col" className="px-6 py-3">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3">
                    State
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Zip
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Ravapar Road
                  </th>
                  <td className="px-6 py-4">Morbi</td>
                  <td className="px-6 py-4">Gujrat</td>
                  <td className="px-6 py-4">363641</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {/* {street} */}
                  </th>
                  <td className="px-6 py-4">{/*{City}*/}</td>
                  <td className="px-6 py-4">{/*{State}*/}</td>
                  <td className="px-6 py-4">{/*{Zip}*/}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MyAddressBook;
