import { useState } from "react";
import Nav from "../components/Navs/Nav";
import {
  MyDetails,
  MyAddressBook,
  MyOrders,
  Trackers,
  Reminders,
} from "../components/UserProfile/";
const profilebox = () => {
  const cart = [1];
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

  //handel the field change
  const handleChange = (event) => {
    setField(event.target.value);
    console.log("clicked");
  };
  return (
    <main className="w-screen h-screen bg-gray-100 flex flex-col min-w-min">
      <div className="w-screen">
        <Nav cart />
      </div>
      <div className=" w-11/12 mx-auto my-16 min-w-min ">
        <div className="h-10">Home / profile</div>
        <div className="h-10 text-4xl font-semibold mb-3">My account</div>
        <div className="flex flex-grow h-4/5  p-3 min-w-min">
          <div className="mx-5 flex flex-col space-y-3 ">
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
          </div>
          <div className="flex-grow bg-white  p-5 rounded-lg w-full">
            {" "}
            Display Data
            {renderSwitch(field)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default profilebox;
