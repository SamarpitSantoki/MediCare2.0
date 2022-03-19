import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { Nav, Nav2, Footer, Products, Carousel } from "../components";
import productContext from "../contexts/Products/productContext";
import userContext from "../contexts/User/userContext";
import dbConnect from "../lib/dbConnect";
import Category from "../models/categorySchema";
import Product from "../models/productSchema";

export default function Home({ prods, cats }) {
  const { products, filteredProducts, setFilteredProducts, setProducts } =
    useContext(productContext);
  const { cart, setCart } = useContext(userContext);

  setProducts(prods);
  useEffect(() => {
    setFilteredProducts(products);
    if (Router.query.search) {
      let search = Router.query.search;
      axios
        .get(`/api/products/search?search=${search}`)
        .then((res) => {
          setFilteredProducts(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  //function to add product to cart
  function addToCart(product) {
    let prod = (event.target as Element).id;
    if (cart.length > 0) {
      let cartItems = [...cart];
      if (cartItems.find((e) => e.slug == prod)) {
        cartItems.map((e) => {
          if (e.slug === prod) e.quntity++;
        });
      } else {
        cartItems.push({
          slug: prod,
          quntity: 1,
        });
      }
      product = [...cartItems];
      setCart(product);
      sessionStorage.setItem("cart", JSON.stringify(product));
    } else {
      setCart([{ slug: prod, quntity: 1 }]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  return (
    <>
      <Head>
        <title>MediCare2.0</title>
        <link rel="icon" href="/images/logo copy.png" />
      </Head>
      <div className="w-fit lg:w-full inline-flex flex-col">
        <Nav />
        <div className="m-0 w-full">
          <Nav2 cats={cats} />
        </div>
        <div>
          <Carousel />
        </div>
        <Image
          alt="carousel"
          src="/images/a_carousel.png"
          className="w-auto sticky top-0"
          layout="responsive"
          width={500}
          height={60}
        />
        {/* display prods Here  */}
        <div className="container mx-auto py-5 md:py-20 max-w-8xl min-w-[484px]">
          <div className="p-5 xl:p-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-start transition-all duration-500">
            <Products prods={filteredProducts} addToCart={addToCart} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

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

  //get all categories
  const category = await Category.find({});
  const cats = category.map((doc) => {
    const cat = doc.toObject();
    cat._id = cat._id.toString();
    return cat;
  });

  return { props: { prods: prods, cats: cats } };
}
