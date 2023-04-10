import React from 'react';
import { Link } from 'react-router-dom';

export default function Createpage() {
  return (
    <>
      <div className="py-4 px-8">
        <div className="flex justify-end">
          <Link to="/">
            <button className=" border-none rounded  bg-zinc-400 w-40">
              Back to homepage
            </button>
          </Link>
        </div>

        <div className="w-full h-full py-20 px-80">
          <div className="  bg-orange-400  border rounded-lg w-full h-full flex  justify-center">
            <div className="w-full px-48">
              <div className="flex justify-center"> Create User</div>
              <form
              //   onSubmit={handleSubmitForm}
              >
                <div>
                  <div className="mb-6">
                    <label
                      for="FirstName"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      name="firstName"
                      // value={input.name}
                      // onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="LastName"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      name="lastName"
                      // value={input.location}
                      // onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      name="categoryId"
                      // value={input.categoryId}
                      // onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      for="moblie"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      name="mobile"
                      // value={input.mobile}
                      // onChange={handleChangeInput}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="py-8 space-x-2 flex justify-center">
                    <button className=" border-none rounded  bg-gray-500  w-40">
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className=" border-none rounded  bg-emerald-500  w-40"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
