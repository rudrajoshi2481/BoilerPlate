import React from 'react'
import { Poppins } from 'next/font/google';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from '@/components/ui/separator';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function page() {
    return (
        <div className={`h-[80vh] w-screen flex items-center justify-center ${poppins.className}`}>
            <div className='flex flex-col gap-5 border p-4 shadow-xl pt-8 rounded-md '>
                <h1 className='text-2xl font-bold'>Mobile App Exploration</h1>
                <div >
                    <Table >
                        <TableBody >
                            <TableRow className='border-none'>
                                <TableCell className='font-bold'>Assignee</TableCell>
                                <TableCell className='flex gap-4 items-center'>Rudhra Joshi <Avatar className='w-8 h-8'>
                                    <AvatarImage sizes='' src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar></TableCell>
                            </TableRow>
                            <TableRow className='border-none'>
                                <TableCell className='font-bold'>Date</TableCell>
                                <TableCell>12 Sep 2022</TableCell>
                            </TableRow>
                            <TableRow className='border-none'>
                                <TableCell className='font-bold'>Status</TableCell>
                                <TableCell className='flex gap-3'><Badge className=' bg-yellow-400' >Pending</Badge><Badge className=' bg-purple-400' >Pending</Badge></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className=''>
                    <Tabs defaultValue="comments" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="comments">Comments <Badge className='ml-3'>12</Badge></TabsTrigger>
                            <TabsTrigger value="password">Description</TabsTrigger>
                            <TabsTrigger value="settings">Settings</TabsTrigger>
                        </TabsList>
                        <TabsContent value="comments" className='mt-5 '>
                            <div className='hover:bg-gray-50 py-2 px-4'>
                                <div className='flex gap-3 items-center'>
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage sizes='' src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className='flex items-center gap-3'>
                                        <h3 className='font-semibold'>Rudhra Joshi</h3>
                                        <p className='text-gray-500 font-light text-sm'>5m ago</p>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    {/* comment */}
                                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        
                                        </p>
                                </div>
                            </div>
                            <Separator className='my-1'/>
                            <div className='hover:bg-gray-50 py-2 px-4' >
                                <div className='flex gap-3 items-center'>
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage sizes='' src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className='flex items-center gap-3'>
                                        <h3 className='font-semibold'>Rudhra Joshi</h3>
                                        <p className='text-gray-500 font-light text-sm'>5m ago</p>
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    {/* comment */}
                                    <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default page