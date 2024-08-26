import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/joy/Button';
import HeroCarousel from './hero-carousel';
import ReviewsCarousel from './reviews';
;

export default function Hero() {
  return (
    <section className='mb-10 bg-gray-100 rounded-lg p-10' >

        <div className='flex items-center gap-10' >

        <div>
            <h1>SHREE HEMKUNT TYRES AND SERVICES</h1>
            <div>
                <p>4.9</p>
                <div className='flex items-center gap-2' >
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <p>2278 Reviews</p>
            </div>
            <div>
                <p>PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
                <p>Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
            </div>
            <Button>Get Directions</Button>
            
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