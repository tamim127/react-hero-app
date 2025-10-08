import React from 'react';
import { Link } from 'react-router';
import demoImg2 from '../../assets/demo-app (2).webp'
import downloadIcon from '../../assets/icon-downloads.png'
import ratingImg from '../../assets/icon-ratings.png'
import reviewImg from '../../assets/icon-review.png'



const AppDetails = () => {
    return (
        <section>
        <div className='flex justify-start items-center gap-[40px] border-b-2 border-gray-300 pb-5 my-[50px]'>
            <div>
                <img src={demoImg2} alt="" />
            </div>
            <div className='space-y-2'>
                <div className='border-b-2 border-gray-300  pb-3'>
                    <h1 className='font-bold text-[32px]'>SmPlan:ToDo List with Reminder</h1>
                    <p className='text-[20px]'>productive.io</p>
                </div>
                <div className='flex  items-center  gap-4'>
                    <div>
                        <img className='w-[30px] h-[30px]' src={downloadIcon} alt="" />
                        <p className='text-[#001931] mt-1'>Download</p>
                        <h1 className='font-bold text-[40px]'>8M</h1>
                        </div>
                    <div>
                        <img className='w-[30px] h-[30px]' src={ratingImg} alt="" />
                        <p className='text-[#001931] mt-1'>Average Ratings</p>
                        <h1 className='font-bold text-[40px]'>4.9</h1>
                    </div>
                    <div>
                        <img className='w-[30px] h-[30px]' src={reviewImg} alt="" />
                        <p className='text-[#001931] mt-1'>Total Reviews</p>
                        <h1 className='font-bold text-[40px]'>54K</h1>
                    </div>
                </div>
                <Link to='' className='btn text-white p-2 bg-[#00d390]'>Install Now (291 MB)</Link>
            </div>
        </div>
        <div className='my-5 border-b-2 border-gray-300 '>
            <h3  className='font-bold text-2xl mb-4'>Rating</h3>

        </div>
        <div className='my-5'>
            <h3 className='font-bold text-2xl mb-4 text-justify'>Description</h3>
            <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest. A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere. For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
        </div>
        </section>
    );
};

export default AppDetails;