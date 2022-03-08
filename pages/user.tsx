import Head from "next/head";

function User() {
  return (
    <>
      <Head>
        <title>MediCare User</title>
        <link rel="icon" href="/images/logo copy.png" />
      </Head>
      <div className="w-fit lg:w-full inline-flex flex-col">
        {/* <Nav cart={cart} /> */}
        <div className="m-0 w-full">{/* <Nav2  /> */}</div>
      </div>
    </>
  );
}
export default User;
