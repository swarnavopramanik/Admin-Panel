import React from 'react';

const Header = ({ category, title, onSelectChange }) => {
  const handleChange = (e) => {
    onSelectChange(e.target.value);
  };
  return (
    <div className="mb-3 sm:flex justify-between items-center">
      <div className="mb-3">
        <p className="text-lg text-gray-400">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
      <div className="flex items-center">
        <p type="button" className="mr-2 text-base">
          Show data by :
        </p>
        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange}>
          <option value="">Default</option>
          <option value="Assignee">Assignee</option>
          <option value="Type">Type</option>
          <option value="Priority">Priority</option>
          <option value="Tags">Tags</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
