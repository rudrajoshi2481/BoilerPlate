import React from 'react'

import { Poppins } from 'next/font/google';
import { ArrowDownToLine, AtSign, Bell, CalendarDays, CircleUserRound, Gem, LayoutGrid, LogOut, Sparkles, Video, Volume2, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function page() {
    return (
        <div className={` h-[80vh] w-full flex items-center justify-center ${poppins.className}`}>
            <div className='flex  border-2 shadow-xl  rounded-md'>
                <MultiplePageSidebar />
                <ShowPage />
            </div>
        </div>
    )
}

const MultiplePageSidebar = () => {
    return (<div className='min-w-[200px] border-r p-4 bg-muted'>
        <div>
            <h4 className='font-mono text-sm text-gray-600'>USER SETTINGS</h4>
            <ul className='mt-3 flex flex-col gap-3'>
                <li className='flex gap-3 items-center'><Sparkles size={18} />Profile</li>
                <li className='flex gap-3 items-center'><CircleUserRound size={18} />Accounts</li>
                <li className='flex gap-3 items-center'><Zap size={18} /> Connections</li>
            </ul>

        </div>
        <Separator className='my-4'/>
        <div>
            <h4 className='font-mono text-sm text-gray-600'>APP SETTINGS</h4>
            <ul className='mt-3 flex flex-col gap-3'>
                <li className='flex gap-3 items-center'><CalendarDays size={18}/>Calendar</li>
                <li className='flex gap-3 items-center'><LayoutGrid size={18}/>Appearence</li>
                <li className='flex gap-3 items-center'><Video size={18}/> Mettings</li>
            </ul>
        </div>
        <Separator className='my-4'/>
        <div>
            
            <ul className='mt-3 flex flex-col gap-3'>
                <li className='flex gap-3 items-center'><Bell size={18} />Notifications</li>
                <li className='flex gap-3 items-center'><AtSign size={18}/>Shortcuts</li>
                <li className='flex gap-3 items-center'><ArrowDownToLine size={18}/> Download apps</li>
            </ul>
        </div>
        <Separator className='my-4'/>
        <div>
            
            <ul className='mt-3 flex flex-col gap-3'>
              
                <li className='flex gap-3 items-center'><Gem size={18}/> What{"'"}s New</li>
                <li className='flex gap-3 items-center'><Volume2 size={18}/> Send Feedback</li>
            </ul>
        </div>
        <Separator className='my-4'/>
        <div>
            
            <ul className='mt-3 flex flex-col gap-3'>
              
              
                <li className='flex gap-3 items-center text-red-500'> <LogOut size={18} /> Log out</li>
            </ul>
        </div>
    </div>)
}

const ShowPage = () => {
    return (
        <div className='min-w-[800px] p-4'>
            <p className='font-mono'>PAGE COMPONENTS</p>
            <Separator className='my-4' />
            <p>
  Render any page using <code className="bg-gray-500 p-1 text-white rounded">next/link</code> 
  <span className="text-blue-500 pl-4">/multiple-pages#Settings</span>
</p>

        </div>
    )
}

export default page