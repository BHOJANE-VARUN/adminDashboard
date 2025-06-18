import React from 'react';

const Header = ({ category, title }) => (
  <div className="mb-10">
    <div className="text-lg text-gray-400 dark:text-gray-200">{category}</div>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
      {title}
    </p>
  </div>
);

export default Header;