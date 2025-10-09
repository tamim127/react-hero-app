import React from 'react';
import { useLocation } from 'react-router';
const AppHeader = ({ search, setSearch, searchedApps }) => {
  const location = useLocation();
  const path = location.pathname;
  const title = path === "/installation" ? "Your Installed Apps" : "Trending Apps";
  const description = path === "/installation"
    ? "Explore All Trending Apps on the Market developed by us"
    : "Explore All Trending Apps on the Market developed by us";
  return (
    <div className='mt-[50px]'>
      <div className='text-center space-y-3'>
        <h1 className='font-bold poppins text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
        <p className='text-[20px] inter text-[#627382]'>{description}</p>
      </div>
      {path === "/apps" && (
        <div className='flex inter flex-col md:flex-row justify-between items-center mt-5'>
          <h3 className='font-medium text-[20px] mb-2'>({searchedApps.length})Total App Found</h3>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
          </label>
        </div>
      )}
    </div>
  );
};

export default AppHeader;