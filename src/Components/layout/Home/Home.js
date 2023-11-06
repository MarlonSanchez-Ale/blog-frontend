import React from 'react'
import { Typography } from '@material-tailwind/react'

export default function Home() {
    return (
        <div className='flex flex-col justify-center gap-5 p-20'>
            <div className='grid place-items-start'>
                <Typography variant='h5' className=' text-left'>
                    My personal blog
                </Typography>
                <Typography variant='h1' className=' text-left'>
                    Hello. I'm Marlon
                </Typography>
                <Typography className=' text-left'>
                    Material Tailwind is an easy to use components library for Tailwind CSS
                    and Material Design.
                </Typography>

            </div>
        </div>
    )
}
