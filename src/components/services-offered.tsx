"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Button } from '@mui/joy'

const services = [
    {
        id: 1,
        image: '/wheel-alignment-bal.png',
        name: 'Wheel Balancing',
    },
    {
        id: 2,
        image: '/wheel-alignment.png',
        name: 'Wheel Alignment',
    },
]

export default function ServicesOffered() {


    const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true })


  return (
    <div className='section-container' >

        <h2 className='font-bold mb-1' >Services offered by this dealer</h2>

            <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex gap-6">

                {
                    services.map((item) => {
                        return (
                            <div className="flex-[0_0_auto] bg-white min-w-0 border hover:bg-gray-200 rounded-md px-16 py-10 shadow-sm max-w-sm flex flex-col items-center justify-center " key={item.id}> 
                                <Image  className='mb-2' src={item.image} alt="Image 1"  width={120} height={120} />
                                <p className='font-semibold my-4' > { item.name}</p>
                                <Button>Book Now</Button>

                        </div>)
                    })
                }

            </div>
            </div>
        </div>
  );
}