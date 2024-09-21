import { Input } from '@/components/ui/input'
import { Check, Ellipsis, LogOut, MessageCircleMore, Mic, Plus, Settings, Users } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function page() {
    return (
        <div className='w-screen h-[90vh] flex justify-center items-center'>
            <div className='border-2     flex shadow-2xl ' >
                <SocialMediaSidebar />
                <SocialMediaChatScreen />
            </div>
        </div>
    )
}

const SocialMediaChatScreen = () => {
    return <div className=' py-3 w-[50vw] relative '>
        <div className='flex gap-2 w-full  items-center justify-between px-5'>
            <div className='flex items-center gap-2'>
                <div >
                    <Avatar className='w-9 h-9 border-green-500 border-2'>
                        {/* <AvatarImage src="https://github.com/shadcn.png"  /> */}
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <h1 className='font-bold'>Herima Cheal</h1>
                    <p className='-mt-1'>Bussiness partner</p>
                </div>
            </div>
            <div>
                {/* mothom menu */}
                <Ellipsis />
            </div>
        </div>
        <Separator className='my-1' />
        <div className='gap-3 px-3 absolute w-full bottom-3'>
            {/* chat screen */}
            <div >
                <div className='flex justify-end mb-8 items-center gap-2'>
                    <span className='border-blue-600 border rounded-full text-blue-700 '><Check size={14}/></span>
                <p className='bg-blue-500 p-2 px-4 rounded-xl text-white'>Hey how you doin??</p>
                </div>
            </div>
            <Separator className='my-3' />
            <div className='flex w-full gap-3'>

                <Input placeholder='Text Message' className='rounded-full' />
                <Button
                    variant={"secondary"} className='rounded-full'>

                    <Plus />
                </Button>

                <Button variant={"secondary"} className='rounded-full'>
                    <Mic />
                </Button>
            </div>
        </div>
    </div>
}

const SocialMediaSidebar = () => {
    return <div className='flex flex-col bg-muted '>
        <h1 className='px-3 font-mono py-4'>chats</h1>
        <Separator />
        <div className='h-[70vh] flex'>
            <SocialMediaSidebarTabs />
            <SocialMediaSidebarChats />
        </div>
    </div>
}

const SocialMediaSidebarTabs = () => {
    return <div className='flex flex-col h-full justify-between w-[40px] items-center  border-r p-3 '>
        <div className='flex flex-col gap-3'>
            <MessageCircleMore size={22} />
            <Users size={22} />
            <Settings size={22} />
        </div>
        <div>
            <LogOut size={22} />
        </div>
    </div>
}

const chatdata = [
    {
        image: "GP",
        name: "John 🚀",
        msg: "Hey, what's up? 😊",
        isNewMsg: false,
        id: "1"
    },
    {
        image: "CN",
        name: "Alice 🌸",
        msg: "Let's catch up! 🌟",
        isNewMsg: true,
        id: "2"
    },
    {
        image: "MR",
        name: "Bob",
        msg: "See you soon!",
        isNewMsg: false,
        id: "3"
    },
    {
        image: "KP",
        name: "Charlie",
        msg: "On my way! 🚗",
        isNewMsg: false,
        id: "4"
    },
    {
        image: "NS",
        name: "Diana 💼",
        msg: "Meeting at 3?",
        isNewMsg: false,
        id: "5"
    },
    {
        image: "YS",
        name: "Eve 🕶️",
        msg: "Sure, sounds good! 👍",
        isNewMsg: false,
        id: "6"
    },
    {
        image: "DP",
        name: "Frank",
        msg: "Let's go! 🏃‍♂️",
        isNewMsg: true,
        id: "7"
    },
   
];


const SocialMediaSidebarChats = () => {
    return (
        <div className='py-3 border-r w-[300px] overflow-hidden '>
            <div className='px-3 pb-1 flex  my-b'>
                {
                    chatdata.map(e => {
                        return <>
                            <div className='min-w-[50px] flex flex-col justify-center items-center gap-1'>
                                <Avatar className='w-9 h-9 border-green-500 border-2'>
                                    {/* <AvatarImage src="https://github.com/shadcn.png"  /> */}
                                    <AvatarFallback>{e.image}</AvatarFallback>
                                </Avatar>
                                <p className='text-xs flex'>{e.name}</p>
                            </div>
                        </>
                    })
                }
            </div>
<Separator />
            <div className='flex justify-between  px-3 py-3'>
                {/* filter bar */}
                <h1 className='font-bold text-sm'>Starred</h1>
                <p className='text-sm text-gray-600'>2 unread messages</p>
            </div>
            <div className='flex  flex-col gap-2 px-3 mt-3 '>
                {
                    chatdata.map(e => {
                        return <>
                            <div className='flex items-center gap-3' >
                                <div>
                                    <Avatar className='w-9 h-9 border-green-500 border-2'>
                                        {/* <AvatarImage src="https://github.com/shadcn.png"  /> */}
                                        <AvatarFallback>{e.image}</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <h1 className='font-bold'>{e.name}</h1>
                                    <p className='text-sm -mt-1'>{e.msg}</p>
                                </div>
                            </div>
                            <Separator />
                        </>
                    })
                }
            </div>

        </div>
    )
}

export default page