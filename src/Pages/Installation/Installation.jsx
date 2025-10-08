import React from 'react';
import AppHeader from './AppHeader';
import LoadAllApps from '../Home/LoadAllApps';
import InstallApps from './InstallApps';
import AppDetails from '../Apps/AppDetails';

const Installation = () => {
    return (
        <div>
           <AppHeader/>
           <InstallApps/>
           <AppDetails/>
        </div>
    );
};

export default Installation;