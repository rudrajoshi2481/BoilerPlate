import { AspectRatio } from '@/components/ui/aspect-ratio'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@radix-ui/react-avatar'
import { Briefcase, CircleArrowRight, Star } from 'lucide-react'
import React from 'react'

import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function page() {
    return (
        <div className={`w-full h-[80vh] flex justify-center items-center ${poppins.className}}`}>
            <div className=' border-2 shadow-2xl rounded-md'>

                <div className='w-[60vw] h-[53vh] mb-3'>
                    <div className='relative'>
                        {/* Gradient and image */}
                        <AspectRatio ratio={60 / 9} className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 -z-20'>

                        </AspectRatio>
                        <div className='z-20 flex justify-between mx-8 ' >
                            <div>
                                <div className='w-32 h-32    -mt-14'>
                                    <Avatar className='mt-34 '>
                                        <AvatarImage src="https://github.com/shadcn.png" className='rounded-full border-white border-4' alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-2xl'>Rudhra Joshi</h1>

                                    <p className='font-extralight'> software Enginer</p>
                                    <p className='font-extralight'>Glassboro, New Jersy</p>
                                    <div className='flex my-2 gap-3'>
                                        <Button className='rounded-full'>Edit Profile </Button >
                                        <Button variant={"outline"} className='rounded-full'>Settings</Button>
                                    </div>
                                </div>
                                {/* Second col */}
                            </div>
                            <div className='mt-3 flex flex-col items-end'>
                                <p className='flex gap-2'>Current Role <Briefcase /></p>
                                <Badge className='mt-2 text-base' variant={"secondary"}>Software Engineer</Badge>
                                <div className='absolute bottom-0 flex flex-col items-end'>
                                    <p className='flex gap-2 mb-2'>Skills <Star /></p>
                                    <div className='flex gap-2'>
                                        <Badge variant={"secondary"} className='p-2 rounded-full '>HTML</Badge>
                                        <Badge variant={"secondary"} className='p-2 rounded-full'>HTML</Badge>
                                        <Badge variant={"secondary"} className='p-2 rounded-full'>HTML</Badge>
                                        <Badge variant={"secondary"} className='p-2 rounded-full'>HTML</Badge>
                                        <Badge variant={"secondary"} className='p-2 rounded-full'>HTML</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' flex mx-8 mt-4 gap-5'>
                        <div className='flex flex-row bg-blue-100 p-4 rounded-md items-center gap-5'>
                            <div className=''>
                            <h1 className='font-bold'>
                                Ready to work
                            </h1>
                            <p>Show recritures that you are ready to work.</p>
                            </div>
                            <div>
                            <CircleArrowRight />
                            </div>
                        </div>
                        <div className='flex flex-row bg-blue-100 p-4 rounded-md items-center gap-5'>
                            <div className=''>
                            <h1 className='font-bold'>
                                Updates
                            </h1>
                            <p>Show recritures that you are ready to work.</p>
                            </div>
                            <div>
                            <CircleArrowRight />
                            </div>
                        </div>
                        <div className='flex flex-row bg-blue-100 p-4 rounded-md items-center gap-5'>
                            <div className=''>
                            <h1 className='font-bold'>
                                Share Posts
                            </h1>
                            <p>Show recritures that you are ready to work.</p>
                            </div>
                            <div>
                            <CircleArrowRight />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default page