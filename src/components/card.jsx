import React from "react";

const Card = ({ name, logo, desc, isActive, toggleSwitch , removeCard }) => {
  return (
    <div className="max-w-md p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl border border-gray-100 dark:border-gray-600">
      <div className="flex items-start space-x-4 mb-6">
        <img src={logo} alt={name} className="w-16 h-16 flex-shrink-0" />
        <div className="flex-2 min-w-0">
          <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
            {name}
          </h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-md leading-relaxed">{desc}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button className="px-5 py-2 text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-200 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-600 border border-neutral-100 dark:border-neutral-600 hover:border-neutral-200 rounded-full transition-colors duration-200 font-medium" onClick={removeCard}>
          Remove
        </button>

        <div className="flex items-center">
          <button
            onClick={toggleSwitch}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${
              isActive ? "bg-red-400" : "bg-neutral-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                isActive ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
