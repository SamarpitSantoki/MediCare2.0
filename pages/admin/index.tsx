import {
  PlusIcon,
  FilterIcon,
  PencilIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import dbConnect from "../../lib/dbConnect";
import Product from "../../models/productSchema";
import Image from "next/image";
const index = ({ prods }) => {
  return (
    <>
      <div>
        <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
          <aside className="py-6 px-10 w-64 border-r border-gray-200">
            <Image
              src="/images/logo.jpg"
              width="150px"
              height={48}
              alt="Logo"
              className="w-28"
            />
            <ul
              //loop here for sidebar
              className="flex flex-col gap-y-6 pt-20"
            >
              <li>
                <a
                  href="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  {/* <Component className="w-6 h-6 fill-current" /> */}
                  <span> Products </span>
                </a>
              </li>
            </ul>
          </aside>

          <main className="flex-1 pb-8">
            <div className="flex items-center justify-between py-7 px-10">
              <div>
                <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
                  Products
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  Let&aposs grow to your business! Create your product and
                  upload here
                </p>
              </div>
              <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                <PlusIcon className="w-6 h-6 fill-current" />
                <span className="text-sm font-semibold tracking-wide">
                  Create Item
                </span>
              </button>
            </div>

            <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
              <li>
                <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group">
                  {/* <Component className="w-6 h-6 fill-current" /> */}
                  <span className="font-medium"> item.name </span>
                  <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                </button>
              </li>
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
                {prods.map((prod) => {
                  return (
                    <tr
                      key={prod._id}
                      //loop for diff products
                      className="hover:bg-gray-100 transition-colors group"
                    >
                      <td className="flex gap-x-4 items-center py-4 pl-10">
                        <input
                          type="checkbox"
                          className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                        />
                        <Image
                          src={prod.image}
                          alt="Product"
                          height="100px"
                          width="100px"
                          className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                        />
                        <div>
                          <a
                            href="#"
                            className="text-lg font-semibold text-gray-700"
                          >
                            {prod.title}
                          </a>
                          <div className="font-medium text-gray-400">
                            {" "}
                            {prod.category}{" "}
                          </div>
                        </div>
                      </td>
                      <td className="font-medium text-center">
                        {" "}
                        {prod.price}{" "}
                      </td>
                      <td className="font-medium text-center">
                        {" "}
                        product.Orders{" "}
                      </td>

                      <td>
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
        </div>
      </div>
    </>
  );
};

export default index;

export async function getServerSideProps() {
  //connect to database
  await dbConnect();
  //get initial products
  const products = await Product.find({}).limit(30);
  const prods = products.map((doc) => {
    const prod = doc.toObject();
    prod._id = prod._id.toString();
    prod.image = "/images/product_images/" + prod._id + "/" + prod.image;
    return prod;
  });

  // //get all categories
  // const category = await Category.find({});
  // const cats = category.map((doc) => {
  //   const cat = doc.toObject();
  //   cat._id = cat._id.toString();
  //   return cat;
  // });

  // return { props: { prods: prods, cats: cats } };
  return { props: { prods: prods } };
}
