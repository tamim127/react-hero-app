import React, { useEffect, useState, useMemo } from 'react';
import downloadIcon from '../../assets/download.png';
import ratingIcon from '../../assets/reating.png';
import LoadingSpinner from '../../Components/Navbar/LoadingSpinner/LoadingSpinner';
const InstallApps = () => {
    const [install, setInstall] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const handler = setTimeout(() => {
            const saveData = JSON.parse(localStorage.getItem('install'));
            if (saveData) setInstall(saveData);
            setLoading(false);
        }, 300);
        return () => clearTimeout(handler);
    }, []);
    const sortedItem = useMemo(() => {
        return [...install].sort((a, b) => {
            const aDownloads = parseInt(a.downloads);
            const bDownloads = parseInt(b.downloads);
            if (sortOrder === 'downloads-asc') return aDownloads - bDownloads;
            if (sortOrder === 'downloads-desc') return bDownloads - aDownloads;
            return 0;
        });
    }, [install, sortOrder]);
    const handleRemove = (id) => {
        const filtered = install.filter(app => app.id !== id);
        setInstall(filtered);
        localStorage.setItem('install', JSON.stringify(filtered));
    };
    if (loading) return <LoadingSpinner />;
    return (
        <>
            <div className='flex justify-between items-center my-3'>
                <h1 className='font-semibold'> {install.length}: Apps Found </h1>
                <label className='form-control'>
                    <select
                        className='select select-bordered outline-none'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort by Downloads</option>
                        <option value="downloads-desc">High → Low</option>
                        <option value="downloads-asc">Low → High</option>
                    </select>
                </label>
            </div>

            {sortedItem.map(a => (
                <div
                    key={a.id}
                    className='flex justify-between bg-base-100 shadow-sm items-center mb-5 p-4 mt-5 rounded-sm'
                >
                    <div className='flex flex-col md:flex-row md:items-center gap-4'>
                        <img className='w-[80px] h-[80px] rounded-xl' src={a.image} alt={a.title} />
                        <div>
                            <h4>{a.title}</h4>
                            <div className='flex justify-start items-center gap-3'>
                                <div className='flex items-center gap-1'>
                                    <img src={downloadIcon} alt="downloadIcon" />
                                    <p>{a.downloads}</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img src={ratingIcon} alt="ratingIcon" />
                                    <p>{a.ratingAvg}</p>
                                </div>
                                <div>
                                    <p>{a.size}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className='btn bg-[#00D390]'
                            onClick={() => handleRemove(a.id)}
                        >
                            Uninstall
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default InstallApps;
