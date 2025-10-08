import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import LoadAllApps from './LoadAllApps';

const Home = () => {
  const apps =useLoaderData()
  const homeApps =apps.slice(0,8)
  // console.log(apps);
  
  return (
    <div>
      <Banner/>
      <div className='my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {homeApps.map(app=>(
          <LoadAllApps key={app.id} app={app}/>
        )) }

      </div>
      <div className="my-8 text-center">
                 <Link className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white border-none hover:opacity-90 " to='/apps'>Show All</Link>
            </div>
    </div>
  );
};

export default Home;