const Trackers = () => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-4 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              My Addresses
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-3">
          <div className="shadow overflow-hidden sm:rounded-md bg-gray-50">
            <div className="px-4 py-5 sm:p-6">
              <table className="w-full">
                <thead className="text-gray-500 font-light">
                  <th>Street address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pincode</th>
                </thead>
                <tbody>Map here for orders array</tbody>
              </table>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trackers;
