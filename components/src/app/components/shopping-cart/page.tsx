import { Button } from '@/components/ui/button'
import { Car, ShieldAlert, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import IconHeadphone from "./headphone-dynamic-premium.png"
import IconMic from "./mic-dynamic-color.png"
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
function page() {
    return (
        <div className='w-screen h-[80vh] flex justify-center  items-center'>
            <div className='border p-4 shadow-xl max-w-[600px]'>
                <div className='flex justify-between'>
                    <div >
                        {/* Header image */}
                        <Image src={IconHeadphone} alt="icon" width={80} height={80}></Image>
                        <h1 className='font-semibold text-2xl mt-4'>Make an offer</h1>
                        <p>submit your offer to the shop and wait for response.</p>
                    </div>
                    <div>
                        <Button variant={"ghost"}> <X /></Button>
                    </div>
                </div>

                <div>
                    {/* all list */}
                    <div className='bg-muted p-4 my-4 rounded-lg flex gap-16'>
                        <div className='flex gap-3 max-w-[400px]'>
                            <div>
                                {/* imge of product */}
                                <Image src={IconMic} alt="icon" width={80} height={80}></Image>
                            </div >
                            <div className='flex flex-col gap-1'>
                                {/* details of products */}
                                <p className='font-semibold'>Mic pro 16 Contains Best audio, rated best by amaxon</p>
                                <p className='flex gap-3'><Car /><span> Ships from: <Link className='text-blue-500 underline' href="#">Glassboro, New Jersy</Link></span></p>
                            </div>
                        </div>
                        <div className='flex flex-col items-end w-[150px]'>
                            {/* pricing */}
                            <p className='font-bold'>$5,200</p>
                            <p className='text-sm'>+49 Shippings</p>
                        </div>
                    </div>
                    <div className='my-4 font-semibold flex flex-col gap-3'>
                        <h1>Your Offer</h1>
                        <div className='flex border align-middle items-center rounded-md'>
                            <Input className='max-w-[400px] border-none' value={"$ 4800.00"} placeholder='Your value' />
                            <Separator orientation='vertical' /><p className='ml-4'>+ 49 shipping</p>
                        </div>
                        <div className='flex gap-3 '>
                            <Badge variant={"outline"} className='bg-purple-200 text-purple-700'>5% off</Badge>
                            <Badge variant={"outline"} className='bg-purple-200 text-purple-700'>10% off</Badge>
                            <Badge variant={"outline"} className='bg-purple-200 text-purple-700'>15% off</Badge>
                        </div>
                        <div className='flex gap-3 p-4 bg-gradient-to-r from-rose-100 to-teal-100 rounded-lg '>
                            <div>
                                {/* icon */}
                                <ShieldAlert />
                            </div>
                            <div className='font-light '>
                                Transaction history shows that the offer amount  you have entered is likely to be accepted
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page