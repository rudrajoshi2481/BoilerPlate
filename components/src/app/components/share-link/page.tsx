import React from 'react'
import { Poppins } from 'next/font/google';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown, CircleFadingArrowUp, MessageCircleDashed, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function page() {
    return (
        <div className={`${poppins.className} h-[80vh] w-[99vw] flex justify-center items-center`}>
            <div className=' p-4 shadow-2xl'>
                <h1 className='font-semibold text-xl '>Share with</h1>
                <div className='flex  gap-3 mt-2 '>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Button variant={"secondary"} className='rounded-full'><Search /></Button>
                </div>
                <Separator className='my-4' />
                <div className='mt-4'>
                    <h1 className='font-semibold text-xl '>Share links</h1>
                    <div className='flex  flex-col gap-4 mt-4'>

                        <div className='flex gap-4 items-center'>
                            <div className='ml-3'>
                                {/* icon */}
                                <CircleFadingArrowUp color='red' />
                            </div>
                            <div>
                                <h1 className='font-semibold'>Dennnis X June</h1>
                                {/* header  */}
                                {/* description */}
                                <p className='flex gap-2'> <span>30m</span><span>·</span>anim.so/p/asdfwqer</p>
                            </div>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <div className='ml-3'>
                                {/* icon */}
                                <MessageCircleDashed color="blue"/>
                            </div>
                            <div>
                                <h1 className='font-semibold'>Dennnis X June</h1>
                                {/* header  */}
                                {/* description */}
                                <p className='flex gap-2'> <span>30m</span><span>·</span>anim.so/p/asdfwqer</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-muted flex  justify-between mt-4 p-4 rounded-lg items-center'>
                    <div>
                        <h1 className='font-semibold'>Create share link</h1>
                        <p>Share al, or specific slots</p>
                    </div>
                    <div className='ml-4'>
                    <DropdownMenu>
  <DropdownMenuTrigger ><Button className='flex gap-2'>New <ChevronDown /> </Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page