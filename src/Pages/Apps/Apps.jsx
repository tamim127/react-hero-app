import React, { useEffect, useState } from 'react';
import AppHeader from '../Installation/AppHeader';
import LoadAllApps from '../Home/LoadAllApps';
import useApps from '../../Hook/useApps';
import { Link } from 'react-router';
import NoAppFound from './NoAppFound';
import LoadingSpinner from '../../Components/Navbar/LoadingSpinner/LoadingSpinner';
const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchedApps, setSearchedApps] = useState([]);
  const term = search.trim().toLowerCase();
  useEffect(() => {
    setSearchLoading(true);
    const handler = setTimeout(() => {
      if (!term) {
        setSearchedApps(apps);
      } else {
        setSearchedApps(
          apps.filter((app) =>
            app.title.toLowerCase().includes(term)
          )
        );
      }
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(handler);
  }, [term, apps]);
  const filteredApps = searchedApps;
  const isLoading = loading || searchLoading;
  const searchText = search;
  return (
    <div>
      <AppHeader
        apps={apps}
        search={search}
        setSearch={setSearch}
        searchedApps={searchedApps}
      />
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <>
          {filteredApps.length > 0 ? (
            <div className="my-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredApps.map((app) => (
                <Link key={app.id} to={`/apps/${app.id}`} className="block">
                  <LoadAllApps app={app} />
                </Link>
              ))}
            </div>
          ) : (
            searchText && (
              <div className="flex justify-center items-center mt-10">
                <NoAppFound setSearch={setSearch} />
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default Apps;
