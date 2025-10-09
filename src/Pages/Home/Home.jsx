import React from 'react';
import useApps from '../../Hook/useApps';
import LoadAllApps from './LoadAllApps';
import { Link } from 'react-router';
import Banner from './Banner';
import LoadingSpinner from '../../Components/Navbar/LoadingSpinner/LoadingSpinner';
const Home = () => {
  const { apps, loading } = useApps();
  const homeApps = apps.slice(0, 8);
  if (loading) return <LoadingSpinner />;
  return (
    <div>
      <Banner />

      <div className="my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 sm:px-6 lg:px-0">
        {homeApps.map(app => (
          <Link key={app.id} to={`/apps/${app.id}`} className="block">
            <LoadAllApps app={app} />
          </Link>
        ))}
      </div>
      <div className="my-8 text-center">
        <Link
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold skeleton shadow-md hover:opacity-90 transition"
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
