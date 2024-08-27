"use client"
import Image from 'next/image'
import { Input } from '@mui/joy'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const footerLinks = [
    {name: 'Who We Are', href: '#'},
    {name: 'Are You a Tyre Dealer?', href: '#'},
    {name: 'Contact us', href: '#'},
    {name: 'Privacy Policy', href: '#'},
    {name: 'Terms of Use', href: '#'},
    {name: 'Career', href: '#'},
    {name: 'Shipping & Return Policy', href: '#'},
]

export default function Footer(){
    return(
        <footer className='' >

            <div className='flex flex-col items-center bg-yellow-200 p-5 rounded-lg mb-10'>

                <Image src="/haveQuestion-bg.webp" className='mb-2 ' width={150} height={150} alt="Have questions icon"  /> 
                <p className='font-bold text-lg mb-4' >Have a question about tyres?</p>

                <Input placeholder='Ask your question' className='max-w-xs w-full mb-1 rounded-full'    /> 
                <p className='text-xs text-zinc-600' >Get an answer in 24 hours from out experts</p>
            </div>


            <div className='flex flex-col md:flex-row justify-between gap-6 p-4 md:p-10' >

                <div className='flex-[0_0_40%]' >
                    <div className='flex flex-col items-start md:items-center gap-2' >
                    <Image src="/TP-logo.png" className='mb-2' width={150} height={36} alt='Tyreplex logo' />
                    <div className='flex items-center gap-2' >
                        <InstagramIcon className='cursor-pointer'  />
                        <FacebookOutlinedIcon className='cursor-pointer' />
                    </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ' >

                {
                    footerLinks.map((link, index) => (
                        <div key={index} className='flex items-center gap-2 mb-2' >
                            <Link href={link.href} className='text-sm font-semibold hover:underline' > {link.name}</Link>
                        </div>
                    ))
                }
                </div>
            </div>

        </footer>
    )
}