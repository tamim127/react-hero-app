import React from 'react';
import downloadIcon from '../../assets/download.png'
import ratingIcon from '../../assets/reating.png'


const LoadAllApps = ({app}) => {
    return (
        <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure className=' h-[285px] w-[285px] p-4 '>
                        <img className=' w-full object-cover rounded-xl'
                            src={app?.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body space-y-2">
                        <p className='font-semibold text-[20px]'>{app?.title}</p>
                        <div className="card-actions justify-between">
                            <div className="btn btn-soft btn-accent">
                                <div className='flex items-center gap-1'>
                                    <img src={downloadIcon} alt="downloadIcon" />
                                    <p>{app?.downloads}</p>
                                </div>
                            </div>
                            <div className="btn btn-soft btn-warning">
                                <div className='flex items-center gap-1'>
                                    <img src={ratingIcon} alt="ratingIcon" />
                                    <p>{app?.rating}</p>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LoadAllApps;