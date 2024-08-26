"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const reviews = [
    {
        id: 1,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 2,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 3,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 4,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 5,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 6,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 7,
        image: '/mrf.svg',
        name: 'MRF',
    },
    {
        id: 8,
        image: '/mrf.svg',
        name: 'MRF',
    },
]

export default function DealsIn() {


    const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true })


  return (
    <div className='mb-10 bg-gray-100 rounded-lg p-10' >

        <h2 className='font-bold mb-1' >Deals In</h2>

            <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex gap-6">

                {
                    reviews.map((item) => {
                        return (
                            <div className="flex-[0_0_auto] bg-white min-w-0 border rounded-md px-10 py-5 shadow-sm max-w-sm flex flex-col items-center justify-center " key={item.id}>
                                <Image  className='mb-2' src={item.image} alt="Image 1"  width={120} height={120} />
                                <p className='text-zinc-700' > { item.name}</p>

                        </div>)
                    })
                }

            </div>
            </div>
        </div>
  );
}