import Image from 'next/image'  
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const tyres = [
    {
        id: 1,
        brand: 'Apollo',
        brandLogo: '/apollo.svg',
        modelName: "AMAZER 4G LIFE",
        modelNumber: "145/80 R12",
        reviews: 321,
        rating: 4.5,
        price: 1200,
        image: "/tyre.png",
        tubeType: 'Tubeless'
    },
    {
        id: 2,
        brand: 'Apollo',
        brandLogo: '/apollo.svg',
        modelName: "AMAZER 4G LIFE",
        modelNumber: "145/80 R12",
        reviews: 321,
        rating: 4.5,
        price: 1200,
        image: "/tyre.png",
        tubeType: 'Tubeless'
    },
    {
        id: 3,
        brand: 'Apollo',
        brandLogo: '/apollo.svg',
        modelName: "AMAZER 4G LIFE",
        modelNumber: "145/80 R12",
        reviews: 321,
        rating: 4.5,
        price: 1200,
        image: "/tyre.png",
        tubeType: 'Tubeless'
    },
    {
        id: 4,
        brand: 'Apollo',
        brandLogo: '/apollo.svg',
        modelName: "AMAZER 4G LIFE",
        modelNumber: "145/80 R12",
        reviews: 321,
        rating: 4.5,
        price: 1200,
        image: "/tyre.png",
        tubeType: 'Tubeless'
    },
    {
        id: 5,
        brand: 'Apollo',
        brandLogo: '/apollo.svg',
        modelName: "AMAZER 4G LIFE",
        modelNumber: "145/80 R12",
        reviews: 321,
        rating: 4.5,
        price: 1200,
        image: "/tyre.png",
        tubeType: 'Tubeless'
    },
]

export default function TyresSold() {
  return (
    <section className='mb-10 bg-gray-100 rounded-lg p-10' >
        <h2 className="font-bold mb-3" >Tyres sold by this dealer</h2>

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

        {
            tyres.map((tyre) => (
                <div key={tyre.id} className="shadow-md bg-white p-6 relative overflow-hidden rounded-md">
                    <Image className='mb-2' src={tyre.brandLogo} alt={tyre.modelName} width={100} height={40} /> 
                    <p className="text-sm font-medium mb-4">{tyre.modelName}</p>

                    <div>
                        <p className="mb-4 text-zinc-700">{tyre.modelNumber}</p>  
                        <p className="text-xs flex items-center gap-2 mb-1"> <span className='bg-green-600 px-0.5 rounded-sm text-white inline-flex items-center gap-0.5' > <StarIcon className="fill-white size-4" /> {tyre.rating} </span  > <span className='text-zinc-600' > {tyre.reviews} Reviews</span>  </p>
                        <p className="text-lg font-semibold mb-1">₹{tyre.price}</p>
                        <p className='text-xs text-green-500 mb-2' >Offer Available</p>
                        <p className="text-xs">{tyre.tubeType}</p>   
                    </div>
                    <Image className='absolute -bottom-10 -right-16' src={tyre.image} alt={tyre.modelName} width={200} height={200} />
                    <div className='bg-yellow-200 absolute top-0 right-0 p-0.5 text-sm flex items-center gap-0.5' > <VerifiedUserIcon className='size-4' /> <p> 5 year warranty </p> </div>
                </div>
            ) )
        }
</div>

    </section>
  )
}