"use client"
import React, { Children, useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from '@/components/ui/separator'
import { Apple, ChevronDown, EllipsisVertical, Folder, LayoutGrid, StickyNote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Poppins } from 'next/font/google';
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Editor } from "@monaco-editor/react"
import { useTheme } from 'next-themes'
const filesTree = [
    {
        fileName: "Documents",
        type: "folder",
        Childrens: [
            {
                fileName: "Resume.docx",
                type: "file",
                Childrens: [],
                path: "/Documents/Resume.docx",
                level: 1
            },
            {
                fileName: "CoverLetter.docx",
                type: "file",
                Childrens: [],
                path: "/Documents/CoverLetter.docx",
                level: 1
            }
        ],
        path: "/Documents",
        level: 0
    },
    {
        fileName: "Photos",
        type: "folder",
        Childrens: [
            {
                fileName: "Vacation",
                type: "folder",
                Childrens: [
                    {
                        fileName: "beach.jpg",
                        type: "file",
                        Childrens: [],
                        path: "/Photos/Vacation/beach.jpg",
                        level: 2
                    },
                    {
                        fileName: "mountains.jpg",
                        type: "file",
                        Childrens: [],
                        path: "/Photos/Vacation/mountains.jpg",
                        level: 2
                    }
                ],
                path: "/Photos/Vacation",
                level: 1
            }
        ],
        path: "/Photos",
        level: 0
    },
    {
        fileName: "Projects",
        type: "folder",
        Childrens: [
            {
                fileName: "Project1",
                type: "folder",
                Childrens: [],
                path: "/Projects/Project1",
                level: 1
            },
            {
                fileName: "Project2",
                type: "folder",
                Childrens: [
                    {
                        fileName: "report.pdf",
                        type: "file",
                        Childrens: [],
                        path: "/Projects/Project2/report.pdf",
                        level: 2
                    }
                ],
                path: "/Projects/Project2",
                level: 1
            }
        ],
        path: "/Projects",
        level: 0
    },
    {
        fileName: "Music",
        type: "folder",
        Childrens: [
            {
                fileName: "song.mp3",
                type: "file",
                Childrens: [],
                path: "/Music/song.mp3",
                level: 1
            }
        ],
        path: "/Music",
        level: 0
    },
    {
        fileName: "Videos",
        type: "folder",
        Childrens: [
            {
                fileName: "movie.mp4",
                type: "file",
                Childrens: [],
                path: "/Videos/movie.mp4",
                level: 1
            }
        ],
        path: "/Videos",
        level: 0
    }
];


const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function page() {
    return (
        <div className={`h-[92vh] w-screen flex justify-center items-center  ${poppins.className}`}><div className='border   min-w-[60vw] shadow-2xl rounded-md'>
            <AppbarTextEditor />
            <Separator />
            <div className='h-[60vh]'>

                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={150}><Sidedrawer /></ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={500} ><TextEditor /></ResizablePanel>
                </ResizablePanelGroup>
            </div>



        </div>

        </div>
    )
}

const AppbarTextEditor = () => {
    return (
        <div className='w-full p-4 flex justify-between'>
            <h1 className='font-bold flex'><Apple /></h1>
            <div className='flex gap-3'>
                <Button size={"sm"} variant={"secondary"} className='font-semibold'>Playground</Button>
                <Button size={"sm"} variant={"secondary"} className='font-semibold'>Run</Button>
            </div>
            <div className=''>
                <Avatar className='h-8 w-8'>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

        </div>
    )
}

const someValues = `const TextEditor = () => {
    return (
        <div className='p-2 h-full w-full'>
             <Editor  defaultLanguage="javascript" value={"some fuinction"} className={poppins.className}/>
        </div>
    )
}
`

const TextEditor = () => {

    const theme = useTheme()

    return (
        <div className='p-2 h-full w-full'>
            
            <Editor defaultLanguage="javascript" options={{
                wordWrap:"on"
            }} value={someValues}  theme={theme.theme === "dark" ? "vs-dark" : "vs-light"} className={poppins.className} />
        </div>
    )
}


const renderTree = (nodes: any) => {

    const [showchildrens, setshowchildrens]: any = useState(true)


    return nodes.map((node: any) => (
        <div key={node.path}>
            <ContextMenu>
                <ContextMenuTrigger onClick={(e) => {
                    e.preventDefault()
                    setshowchildrens(!showchildrens)
                }}><p className='text-sm flex gap-1 py-1 hover:bg-background'>
                        <ChevronDown size={16} /> {node.fileName}  </p></ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Profile</ContextMenuItem>
                    <ContextMenuItem>Billing</ContextMenuItem>
                    <ContextMenuItem>Team</ContextMenuItem>
                    <ContextMenuItem>Subscription</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>

            {
                showchildrens && <>
                    {node.Childrens.length > 0 && (
                        <div className="pl-4">
                            {renderTree(node.Childrens)}
                        </div>
                    )}</>
            }
        </div>
    ));
}
const Sidedrawer = () => {

    return (
        <div className='p-2'>
            <div className='flex justify-between items-center px-2'>
                <h1 className=' font-bold '>All Projects</h1>
                <div className='flex gap-1'>
                    <StickyNote size={18} />
                    <Folder size={18} />
                    <LayoutGrid size={18} />
                </div>
            </div>

            <div>

            </div>
            {renderTree(filesTree)}
        </div>
    )
}


export default page