import React, { useState, useEffect } from "react";
const StatsSection = () => {
    const statsData = [
        {
            title: "Total Downloads",
            value: 29600000,
            display: (val) => `${(val / 1000000).toFixed(1)}M`,
            description: "21% More Than Last Month",
        },
        {
            title: "Total Reviews",
            value: 906000,
            display: (val) => `${(val / 1000).toFixed(0)}K`,
            description: "46% More Than Last Month",
        },
        {
            title: "Active Apps",
            value: 132,
            display: (val) => val,
            description: "31 More Will Launch",
        },
    ];
    const [counts, setCounts] = useState(statsData.map(() => 0));
    useEffect(() => {
        const duration = 3000;
        const intervalTime = 20;
        const steps = duration / intervalTime;
        const increments = statsData.map((stat) => stat.value / steps);
        const interval = setInterval(() => {
            setCounts((prev) =>
                prev.map((count, i) => {
                    if (count + increments[i] >= statsData[i].value) return statsData[i].value;
                    return count + increments[i];
                })
            );
        }, intervalTime);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-screen inter bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white py-14 px-6 md:px-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">
                Trusted By Millions, Built For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                {statsData.map((stat, index) => (
                    <div key={index} className="space-y-2">
                        <p className="text-gray-200 mb-1">{stat.title}</p>
                        <h3 className="text-4xl font-bold">{stat.display(Math.floor(counts[index]))}</h3>
                        <p className="text-sm text-gray-300">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default StatsSection;
