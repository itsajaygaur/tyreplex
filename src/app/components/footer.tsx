import Image from 'next/image'
import { Input } from '@mui/joy'

export default function Footer(){
    return(
        <footer  >

            <div className='flex flex-col items-center bg-yellow-200 p-5 rounded-lg'>

            <Image src="/haveQuestion-bg.webp" className='mb-2 ' width={150} height={150} alt="Have questions icon"  /> 
            <p className='font-bold text-lg mb-4' >Have a question about tyres?</p>

            <Input placeholder='Ask your question' className='max-w-xs w-full mb-1 rounded-full'    /> 
            <p className='text-xs text-zinc-600' >Get an answer in 24 hours from out experts</p>
            </div>

        </footer>
    )
}