"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const reviews = [
    {
        id: 1,
        image: '/tyreplex-1.jpg',
        name: 'Rohit Bhati',
        review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend"
        
    },
    {
        id: 2,
        image: '/tyreplex-2.jpg',
        name: 'Rohit Bhati',
        review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend"
    },
    {
        id: 3,
        image: '/tyreplex-1.jpg',
        name: 'Rohit Bhati',
        review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend"
    },
    {
        id: 4,
        image: '/tyreplex-2.jpg',
        name: 'Rohit Bhati',
        review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend"
    },
]

export default function Reviews() {


    const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true })

  return (
    <div className='' >

        <h2 className='font-bold mb-3' >2278 Google Reviews</h2>

    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">

        {
            reviews.map((item) => {
                return (
                    <div className="flex-[0_0_auto] bg-white min-w-0 border rounded-md p-5 max-w-sm cursor-grab" key={item.id}>
                    <div className="flex gap-2 items-center mb-5"> 
                        <Image  className='aspect-square rounded-full' src={item.image} alt="Image 1"  width={40} height={40} />
                        <p className='font-semibold' >{item.name}</p>
                    </div>

                    <p className='text-zinc-700 text-sm' > { item.review}</p>

                </div>)
            })
        }

      </div>
    </div>
        </div>
  )
}
