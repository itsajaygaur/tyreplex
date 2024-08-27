import { Button } from "@mui/joy"
import Image from "next/image"
import Link from "next/link"
import MobileNav from "./mobile-nav"
import { navItems } from "@/lib/constant"
import PersonIcon from '@mui/icons-material/Person';


export default function Navbar() {
  return (
    <nav className="flex gap-2 items-center justify-between bg-gray-200 p-4  rounded-lg shadow-md mb-5 mt-2">
        <div className="flex items-center gap-2" >
            <div className="lg:hidden" >
                <MobileNav />
            </div>
            <Image src="/TP-logo.png" width={150} height={36} alt="Tyreplex logo" />

        </div>
        <div className="hidden lg:flex items-center gap-6" >
            {
                navItems.map((link, index) => (
                    <Link key={index} href={link.href} className='text-sm font-medium' > {link.name}</Link>
                ))
            }
        </div>
        <Button color="neutral" variant="plain" startDecorator={<PersonIcon className="size-5" />} size='sm' >Login</Button>
    </nav>
  )
}