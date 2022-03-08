import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navs/Nav";
import Nav2 from "../components/Navs/Nav2";
import Products from "../components/Products";
import dbConnect from "../lib/dbConnect";
import Category from "../models/categorySchema";
import Product from "../models/productSchema";

export default function Home({ prods, cats }) {
  const [products, setProds] = useState(prods);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    let prods = cart;
    let prod = (event.target as Element).id;
    if (prods.length > 0) {
      if (prods.find((e) => e.slug == prod)) {
        prods.map((e) => {
          if (e.slug === prod) e.quntity++;
        });
      } else {
        prods.push({
          slug: prod,
          quntity: 1,
        });
      }
    } else {
      prods.push({
        slug: prod,
        quntity: 1,
      });
    }
    product = [...prods];
    setCart(product);
    console.log(product);
  }
  return (
    <>
      <Head>
        <title>MediCare2.0</title>
        <link rel="icon" href="/images/logo copy.png" />
      </Head>
      <div className="w-fit lg:w-full inline-flex flex-col">
        <Nav cart={cart} />
        <div className="m-0 w-full">
          <Nav2 filter={setProds} cats={cats} />
        </div>
        <div>
          <Carousel />
        </div>
        <Image
          src="/images/a_carousel.png"
          className="w-auto sticky top-0"
          layout="responsive"
          width={500}
          height={60}
        />
        {/* display prods Here  */}
        <div className="container mx-auto py-5 md:py-20 max-w-8xl min-w-[484px]">
          <div className="p-5 xl:p-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start transition-all duration-500">
            <Products prods={products} addToCart={addToCart} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const products = await Product.find({}).limit(20);

  const prods = products.map((doc) => {
    const prod = doc.toObject();
    prod._id = prod._id.toString();
    prod.image = "/images/product_images/" + prod._id + "/" + prod.image;
    return prod;
  });

  const category = await Category.find({});
  const cats = category.map((doc) => {
    const cat = doc.toObject();
    cat._id = cat._id.toString();
    return cat;
  });

  return { props: { prods: prods, cats: cats } };
}
