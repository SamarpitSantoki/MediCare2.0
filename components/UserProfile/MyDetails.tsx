const MyDetails = () => {
  return (
    <div className="m-4 w-fill h-fit space-x-3 space-y-3">
      <h2>MyDetails</h2>
      <div className="space-x-3 space-y-5 w-full">
        <label>Personal Information</label>
        <hr />
        <div className="space-y-2 lg:space-x-2 flex-col flex md:flex-none xl:flex-row">
          <label>First Name : </label>
          <input type="text" className="border " />
          <label>Last Name : </label>
          <input type="text" className="border " />
        </div>
        <div>
          <label>Birth Date : </label>
          <input type="date" className="border-4 border-double" />
        </div>
        <div>
          <label>Phone Number : </label>
          <input type="text" className="border-2" placeholder="+91" />
          <dd>
            <p className="pt-3">
              This number will be used to send you reminders and to contact you
              about your order.
            </p>
          </dd>
        </div>
      </div>
      <div className="space-x-3 space-y-3">
        <label>E-mail address</label>
        <hr />
        <div>
          <label>Email-address</label>
          <input type="email" />
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
