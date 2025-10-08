import React from 'react';
import downloadIcon from '../../assets/download.png'
import ratingIcon from '../../assets/reating.png'
import demoImg from '../../assets/demo-app (4).webp'
const InstallApps = () => {
    return (
        <div>
            <div className='flex justify-between bg-base-100 shadow-sm items-center p-4 mt-5 rounded-sm '>
                <div className='flex items-center gap-4'>
                    <img className='w-[80px] h-[80px] rounded-xl' src={demoImg} alt="" />
                    <div>
                        <h4>Forest: Focus for Productivity</h4>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='flex items-center gap-1'>
                                <img src={downloadIcon} alt="downloadIcon" />
                                <p>9M</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <img src={ratingIcon} alt="ratingIcon" />
                                <p>5</p>
                            </div>
                            <div>
                                <p>258 MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='btn '>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstallApps;