/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import axios from 'axios'
import { useCookies } from 'react-cookie';

import { appConfig } from "../config";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Submit() {
  const [agreed, setAgreed] = useState(false)
  const [cookies] = useCookies(["csrftoken"]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestBody = {};
    for (var [key, value] of formData.entries()) {
      requestBody[key] = value;
    }

    axios({
      method: "post",
      url: `${appConfig.baseUrl}/${appConfig.geneSuggestUri}`,
      data: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.csrftoken,
      },
      mode: "same-origin",
      withCredentials: true,
    }).then((response) => {
      if (response.status === 200) {
        alert("Thank you for contributing to the database!");
        event.target.reset();
      } else {
        alert("Something went wrong, couldn't submit the form.");
      }
    });
  }

  return (
    <div className="bg-gray-100 py-16 px-4 overflow-y-auto overflow-x-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Submit form</h2>
          <p className="mt-4 text-xl leading-6 text-gray-500">
            ---
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={formSubmitHandler} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first_name" className="block text-lg font-medium text-gray-700">
                Name*
              </label>
              <div className="mt-1">
                <input
                required
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email*
              </label>
              <div className="mt-1">
                <input
                required
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-lg font-medium text-gray-700">
                Pubmed ID*
              </label>
              <div className="mt-1">
                <input
                required
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-lg font-medium text-gray-700">
                Publication year
              </label>
              <div className="mt-1">
                <input
                
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-lg font-medium text-gray-700">
                Gene name*
              </label>
              <div className="mt-1">
                <input
                required
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone_number" className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                required
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  autoComplete="tel"
                  className="shadow-sm py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="    91 9034134181"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                Comments
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
