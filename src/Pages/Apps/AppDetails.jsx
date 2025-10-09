import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
import useApps from '../../Hook/useApps';
import AppError from './AppError';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from 'recharts';
import LoadingSpinner from '../../Components/Navbar/LoadingSpinner/LoadingSpinner';
const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useApps();
    const [isInstalled, setIsInstalled] = useState(false);
    const app = apps.find((a) => String(a.id) === id);
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem('install')) || [];
        const installed = existingData.some((a) => a.id === parseInt(id));
        setIsInstalled(installed);
    }, [id]);
    if (loading) return <LoadingSpinner />;
    if (!app) return <AppError />;
    const handleAddToInstall = () => {
        const existingData = JSON.parse(localStorage.getItem('install')) || [];
        const isDuplicate = existingData.some((a) => a.id === app.id);
        if (isDuplicate) {
            toast.error(`${app.title} is already installed`);
            return;
        }
        const updatedData = [...existingData, app];
        localStorage.setItem('install', JSON.stringify(updatedData));
        toast.success(`${app.title} installed successfully`);
        setIsInstalled(true);
    };
    const ratingData = app.ratings.map((r) => ({
        name: r.name,
        count: r.count,
    }));
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-8 border-b-2 border-gray-300 pb-5 mt-12">
                <div className="w-full md:w-1/4">
                    <img
                        className="w-full h-auto rounded-lg object-cover"
                        src={app.image}
                        alt={app.title}
                    />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                    <div className="border-b-2 border-gray-300 pb-3">
                        <h1 className="font-bold poppins text-2xl md:text-4xl">{app.title}</h1>
                        <p className="text-base inter mt-2 md:text-xl text-gray-600">Developed by <span className='bg-clip-text text-transparent bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>{app.companyName}.</span> </p>
                    </div>
                    <div className="flex inter flex-row sm:flex-row items-start sm:items-center gap-5">
                        <div className='flex flex-col justify-center items-center text-center space-y-2'>
                            <img className="w-8 h-8" src={downloadIcon} alt="Downloads" />
                            <p className="text-sm sm:text-base text-[#001931]">Downloads</p>
                            <h1 className="font-bold text-xl sm:text-3xl">{app.downloads}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center space-y-2'>
                            <img className="w-8 h-8" src={ratingImg} alt="Rating" />
                            <p className="text-sm sm:text-base text-[#001931]">Average Rating</p>
                            <h1 className="font-bold text-xl sm:text-3xl">{app.ratingAvg}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center space-y-2'>
                            <img className="w-8 h-8" src={reviewImg} alt="Reviews" />
                            <p className="text-sm sm:text-base text-[#001931]">Total Reviews</p>
                            <h1 className="font-bold text-xl sm:text-3xl">{app.reviews}</h1>
                        </div>
                    </div>
                    <button
                        onClick={handleAddToInstall}
                        disabled={isInstalled}
                        className={`btn  w-full sm:w-auto p-2 text-white rounded-md transition ${isInstalled
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#00d390] skeleton hover:bg-[#00b578]'
                            }`} >
                        {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>
            <div className="my-4 text-center">
        <Link
          className="inline-block  px-6 py-3 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold skeleton shadow-md hover:opacity-90 transition"
          to="/installation"
        >
         View Installed Apps
        </Link>
      </div>

            {/* --- Ratings Section --- */}
            <div className="mt-10 inter border-b-2 border-gray-300 pb-6">
                <h3 className="font-bold text-2xl mb-4">Ratings</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={[...ratingData].sort((a, b) => a.name - b.name)}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" reversed />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ff8c00" barSize={25} radius={[4, 4, 4, 4]}>
                            <LabelList dataKey="count" position="right" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {/* --- Description Section --- */}
            <div className="my-5">
                <h3 className="font-bold poppins text-2xl mb-4 text-justify">Description</h3>
                <p className="text-justify inter text-gray-700 leading-relaxed">{app.description}</p>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </section>
    );
};

export default AppDetails;
