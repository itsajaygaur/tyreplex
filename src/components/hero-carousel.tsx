"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const items = [
    {
        id: 1,
        image: '/tyreplex-1.jpg',
    },
    {
        id: 2,
        image: '/tyreplex-2.jpg',
    },
    {
        id: 3,
        image: '/tyreplex-1.jpg',
    },
    {
        id: 4,
        image: '/tyreplex-2.jpg',
    },
]

export default function HeroCarousel() {


    const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true,  })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6 cursor-grab">

        {
            items.map((item) => {
                return (<div className="flex-[0_0_auto] min-w-0" key={item.id}>
                    <Image className=' rounded-md' src={item.image} alt="Image 1" width={400} height={400} />
                </div>)
            })
        }

      </div>
    </div>
  )
}
