import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const paymentMode = [
    {
        id: 1,
        name: 'Deposit to Account', 
    },
    {
        id: 2,
        name: 'Credit Card / Debit Card',
    },
    {
        id: 3,
        name: 'Wallets (PayTM/PhonePe/Amazon etc.)',
    },
    {
        id: 4,
        name: 'Net Banking',
    },
    {
        id: 5,
        name: 'UPI',
    },
]

export default function PaymentMode(){
    return(
        <section className='section-container' >
            <h2 className='font-bold mb-3' >Payment Mode</h2>
            <div className='space-y-3 grid grid-cols-2'>


        {
            paymentMode.map((item) => (
                <div key={item.id} className="flex gap-2 items-center ">
                    <CheckCircleIcon  className='fill-green-600' />
                    <p  >{item.name}</p>
                </div>
            ))
        }

        </div>
        </section>
    )
}