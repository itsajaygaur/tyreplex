import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/joy/Button';
import HeroCarousel from './hero-carousel';
import ReviewsCarousel from './reviews';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Hero() {
  return (
    <section className='section-container' >

        <div className='flex flex-col lg:flex-row items-center gap-10' >

        <div>
            <h1 className='text-xl font-semibold mb-4' >SHREE HEMKUNT TYRES AND SERVICES</h1>
            <div className='flex items-center gap-2 text-sm mb-2' >
                <p>4.9</p>
                <div className='flex items-center ' >
                    <StarIcon className='size-4 fill-yellow-400'  />
                    <StarIcon className='size-4 fill-yellow-400' />
                    <StarIcon className='size-4 fill-yellow-400' />
                    <StarIcon className='size-4 fill-yellow-400' />
                    <StarIcon className='size-4 fill-yellow-400' />
                </div>
                <p className='text-xs underline' >2278 Reviews</p>
            </div>
            <div className='space-y-1 mb-4 md:mb-6' >
                <div className='text-sm flex items-start gap-5' > <LocationOnOutlinedIcon className='size-5 ' /> <p> PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014 </p></div>
                <div className='text-sm flex items-start gap-5 ' > <AccessTimeIcon className='size-5' /> <p className='text-zinc-600' > Open - Monday   to   Sunday - 10:00AM to 8:00PM </p></div>
            </div>
            <Button variant='outlined' color='danger' >Get Directions</Button>
            
        </div>

        <div className='flex-[0_0_60%]' >
            
            <HeroCarousel />
        </div>
        </div>

        <div className='mt-20' >
                <ReviewsCarousel />

        </div>

    </section>
  )
}