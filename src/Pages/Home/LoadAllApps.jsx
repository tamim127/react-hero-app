import React from 'react';
import ratingIcon from '../../assets/reating.png';
import downloadIcon from '../../assets/icon-downloads.png'
const LoadAllApps = ({ app }) => {
  return (
    <div className="w-full inter">
      <div className="card bg-base-100 shadow-md rounded-xl hover:shadow-lg transition hover:scale-105 duration-700">
        <figure className='w-full h-60 sm:h-64 md:h-72 lg:h-80 p-4'>
          <img
            className='w-full h-full object-cover rounded-xl'
            src={app?.image}
            alt={app?.title}
          />
        </figure>
        <div className="card-body p-4 space-y-2">
          <p className='font-semibold text-lg sm:text-xl md:text-[20px]  truncate'>
            {app?.title}
          </p>
          <div className="card-actions justify-between">
            <div className="btn animate-bounce btn-soft btn-accent flex justify-center gap-2 py-2 px-3 text-sm sm:text-base">
              <img className='w-5 h-5' src={downloadIcon} alt="downloadIcon" />
              <span>{app?.downloads}</span>
            </div>
            <div className="btn btn-soft skeleton btn-warning  flex justify-center gap-2 py-2 px-3 text-sm sm:text-base">
              <img className='w-5 h-5' src={ratingIcon} alt="ratingIcon" />
              <span>{app?.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadAllApps;
