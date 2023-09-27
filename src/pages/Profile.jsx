import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="p-16">
        <div className="p-8 rounded-xl bg-lightTeal shadow mt-24">
          <div className="grid grid-cols-1 ">
            <div className="relative">
              <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-36  flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-700">
              Jessica Jones
            </h1>
            <p className="font-light text-gray-600 mt-3">Joined SInce 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
