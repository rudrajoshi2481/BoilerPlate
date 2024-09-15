import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

function Appbar() {
    return (
        <div className='w-full px-9 py-3 border-b flex justify-between align-middle items-center'>
            <h1 className='font-bold font-mono'><Link href="/">Boilerplate code</Link></h1>
            <div ><ModeToggle /></div>
        </div>
    )
}



export default Appbar