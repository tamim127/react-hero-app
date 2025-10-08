import React from 'react';
import AppHeader from '../Installation/AppHeader';
import LoadAllApps from '../Home/LoadAllApps';
import { useLoaderData } from 'react-router';


const Apps = () => {
    const AllApps =useLoaderData()
    
    

    
    return (
        <div>
            <AppHeader AllApps={AllApps}/>
            <div className='my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

            {
                AllApps.map(app=>(
                    <LoadAllApps key={app.id} app={app}/>
                ))
            }
            </div>
           
           
        </div>
    );
};

export default Apps;
















// import React from 'react';
// import LoadAllApps from '../Home/LoadAllApps';
// import AppHeader from '../Installation/AppHeader';

// const Apps = () => {
//     return (
//         <div>
//             <AppHeader />
//             <LoadAllApps />
//         </div>
//     );
// };

// export default Apps; <h1>My Apps</h1>