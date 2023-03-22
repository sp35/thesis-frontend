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
import { useState } from "react";
import { Switch } from "@headlessui/react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { appConfig } from "../config";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Submit() {
  const [agreed, setAgreed] = useState(false);
  const [cookies] = useCookies(["csrftoken"]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const requestBody = { linked_suggestion: {} };
    for (var [key, value] of formData.entries()) {
      if (key.includes("linked_suggestion__")) {
        requestBody["linked_suggestion"][
          key.replace("linked_suggestion__", "")
        ] = value;
      } else if (key === "species_name") {
        requestBody["species"] = {
          name: value,
        };
      } else {
        requestBody[key] = value;
      }
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
      if (response.status === 201) {
        alert("Thank you for contributing to the database!");
        event.target.reset();
      } else {
        alert("Something went wrong, couldn't submit the form.");
      }
    });
  };

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
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
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
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Submit form
          </h2>
          <p className="mt-4 text-xl leading-6 text-gray-500">---</p>
        </div>
        <div className="mt-12">
          <form
            onSubmit={formSubmitHandler}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="linked_suggestion__contributor_name"
                className="block text-lg font-medium text-gray-700"
              >
                Name*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="linked_suggestion__contributor_name"
                  id="linked_suggestion__contributor_name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="linked_suggestion__contributor_email"
                className="block text-lg font-medium text-gray-700"
              >
                Email*
              </label>
              <div className="mt-1">
                <input
                  required
                  id="linked_suggestion__contributor_email"
                  name="linked_suggestion__contributor_email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="publication_link"
                className="block text-lg font-medium text-gray-700"
              >
                Publication Link*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="publication_link"
                  id="publication_link"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="publication_year"
                className="block text-lg font-medium text-gray-700"
              >
                Publication year
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="publication_year"
                  id="publication_year"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Gene name*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="species_name"
                className="block text-lg font-medium text-gray-700"
              >
                Plant species*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="species_name"
                  id="species_name"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="host"
                className="block text-lg font-medium text-gray-700"
              >
                Host species*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="host"
                  id="host"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="symbol"
                className="block text-lg font-medium text-gray-700"
              >
                Gene symbol*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="symbol"
                  id="symbol"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="function"
                className="block text-lg font-medium text-gray-700"
              >
                Function*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="function"
                  id="function"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="pathway_category"
                className="block text-lg font-medium text-gray-700"
              >
                Pathway Category*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="pathway_category"
                  id="pathway_category"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phenotype"
                className="block text-lg font-medium text-gray-700"
              >
                Phenotype*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="phenotype"
                  id="phenotype"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="experimental_method"
                className="block text-lg font-medium text-gray-700"
              >
                Experimental Method*
              </label>
              <div className="mt-1">
                <input
                  required
                  type="text"
                  name="experimental_method"
                  id="experimental_method"
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="linked_suggestion__contributor_phone_number"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="linked_suggestion__contributor_phone_number"
                  id="linked_suggestion__contributor_phone_number"
                  autoComplete="tel"
                  className="shadow-sm py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="91 9034134181"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="linked_suggestion__contributor_comments"
                className="block text-lg font-medium text-gray-700"
              >
                Comments
              </label>
              <div className="mt-1">
                <textarea
                  id="linked_suggestion__contributor_comments"
                  name="linked_suggestion__contributor_comments"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={""}
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
  );
}
