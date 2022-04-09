import dbConnect from "../../lib/dbConnect";
import Product from "../../models/productSchema";
import Category from "../../models/categorySchema";
import { useEffect, useState } from "react";

import axios from "axios";
import {
  ProductList,
  OrderList,
  CategoryList,
  UserList,
  RemindersList,
} from "../../components/Admin";
import User from "../../models/userSchema";
import Link from "next/link";

const Index = ({ prods, cats, user }) => {
  const [field, setField] = useState();
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    async function getcollections() {
      const { data } = await axios.get("api/admin/getcollections");
      setCollections(data);
    }
    getcollections();
  }, []);

  //render components acording to the selected field
  const renderSwitch = (field) => {
    switch (field) {
      case "users":
        return <UserList users={user} />;
      case "orders":
        return <OrderList />;
      case "categories":
        return <CategoryList cats={cats} />;
      case "Reminders":
        return <RemindersList />;
      default:
        return <ProductList prods={prods} cats={cats} />;
    }
  };

  //handle the field change
  const handleFieldChange = async (event) => {
    setField(event.target.value);
    let current = document.getElementsByClassName(
      " active scale-y-100 translate-x-0"
    );

    while (current.length > 0) {
      current[0].className = current[0].className.replace(
        " active scale-y-100 translate-x-0",
        " scale-y-0 -translate-x-full"
      );
    }
    event.target.firstChild.className =
      event.target.firstChild.className.replace(
        " scale-y-0 -translate-x-full",
        " active scale-y-100 translate-x-0"
      );
  };

  return (
    <>
      <div>
        <div className="w-fit lg:w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
          {/* SideBar */}
          <aside className="py-6 px-10 w-64 border-r border-gray-200">
            {/* <Image
              src="/images/logo.jpg"
              width="150px"
              height={48}
              alt="Logo"
              className="w-28"
            /> */}

            <Link href="/">
              <a className="text-4xl font-semibold px-4 py-2 ring-2 ring-medi-200 w-fit text-medi-200">
                MediCare
              </a>
            </Link>
            <ul id="myDIV" className="flex flex-col gap-y-6 pt-20">
              {collections.map((collection) => {
                return (
                  <button
                    key={collection}
                    onClick={handleFieldChange}
                    value={collection}
                    className="btn flex gap-x-4 active items-center py-2 text-gray-500 hover:text-indigo-600 group"
                  >
                    <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out scale-y-0 -translate-x-full" />

                    {collection}
                  </button>
                );
              })}
            </ul>
          </aside>
          {renderSwitch(field)}
        </div>
      </div>
    </>
  );
};

export default Index;

export async function getServerSideProps() {
  //connect to database
  await dbConnect();
  //get initial products
  const products = await Product.find({});
  const prods = products.map((doc) => {
    const prod = doc.toObject();
    prod._id = prod._id.toString();
    prod.image = "/images/product_images/" + prod._id + "/" + prod.image;
    return prod;
  });

  //get all categories
  const category = await Category.find({});
  const cats = category.map((doc) => {
    const cat = doc.toObject();
    cat._id = cat._id.toString();
    return cat;
  });

  const user = await User.find({});
  const users = user.map((doc) => {
    const cat = doc.toObject();
    cat._id = cat._id.toString();
    return cat;
  });

  return { props: { prods: prods, cats: cats, user: users } };
  // return { props: { prods: prods } };
}
