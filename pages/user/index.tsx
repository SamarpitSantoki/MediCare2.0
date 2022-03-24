import { useState } from "react";
import {
  MyDetails,
  MyAddressBook,
  MyOrders,
  Trackers,
  Reminders,
} from "../../components/UserProfile/";
import Nav from "../../components/Navs/Nav";

const Index = () => {
  const [field, setField] = useState();

  //render components acording to the selected field
  const renderSwitch = (field) => {
    switch (field) {
      case "My Details":
        return <MyDetails />;
      case "My Address Book":
        return <MyAddressBook />;
      case "My Orders":
        return <MyOrders />;
      case "Trackers":
        return <Trackers />;
      case "Reminders":
        return <Reminders />;
      default:
        return <MyDetails />;
    }
  };

  //handle the field change
  const handleChange = (event) => {
    setField(event.target.value);
    console.log("clicked");
  };

  return (
    <>
      <div className="h-fit md:h-screen bg-slate-100 mx-auto">
        <Nav />
        <div className="flex justify-center h-4/5 w-4/5 mx-auto md:my-10">
          <div className="flex md:w-full">
            <section className="navigation flex flex-col py-3 px-5 space-y-5 group-hover:cursor-pointer bg-gray-100 relative">
              <label
                htmlFor="section"
                className="text-3xl font-semibold absolute -top-24 right-3 w-full"
              >
                My Account
              </label>
              <button
                className="group hover:bg-medi-700 hover:text-medi-100 w-36 px-2 py-1 rounded-md"
                value={"My Details"}
                onClick={handleChange}
              >
                My Details
              </button>
              <button
                className="group hover:bg-medi-700 hover:text-medi-100 w-36 px-2 py-1 rounded-md"
                value={"My Address Book"}
                onClick={handleChange}
              >
                My address book
              </button>
              <button
                className="group hover:bg-medi-700 hover:text-medi-100 w-36 px-2 py-1 rounded-md"
                value={"My Orders"}
                onClick={handleChange}
              >
                My Orders
              </button>
              <button
                className="group hover:bg-medi-700 hover:text-medi-100 w-36 px-2 py-1 rounded-md"
                value={"Trackers"}
                onClick={handleChange}
              >
                Trackers
              </button>
              <button
                className="group hover:bg-medi-700 hover:text-medi-100 w-36 px-2 py-1 rounded-md"
                value={"Reminders"}
                onClick={handleChange}
              >
                Reminders
              </button>
            </section>
            <section className="bg-white p-5 rounded-lg w-full">
              {renderSwitch(field)}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
