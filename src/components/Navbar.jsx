import { LuWalletCards } from "react-icons/lu";

import { FaRegClock, FaInfoCircle } from "react-icons/fa";
import { LiaIdCardSolid } from "react-icons/lia";

import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='shadow-md fixed left-0 top-0 w-[300px] h-screen flex flex-col items-start gap-9 border bg-white'>
            <div className='bg-orange-500 text-white py-2 px-4 m-4 rounded-full w-[120px] text-center'>
                <Link href='/'>Examen Final</Link>
            </div>
            <div className='pl-10'>
                <Link href='/ejercicio1' className='bg-white rounded py-1 px-4 flex gap-4 items-center'>
                    <LiaIdCardSolid/>
                    <p>Card Generator</p>
                </Link>
                <Link href='/ejercicio2' className='bg-white rounded py-1 px-4 flex gap-4 items-center'>
                    <FaRegClock />
                    <p>Digital Clock</p>
                </Link>
                <Link href='/ejercicio3' className='bg-white rounded py-1 px-4 flex gap-4 items-center'>
                    <FaInfoCircle />
                    <p>Drilling Info</p>
                </Link>
                <Link href='/ejercicio4' className='bg-white rounded py-1 px-4 flex gap-4 items-center'>
                    <LuWalletCards/>
                    <p>Galeria de Cartas</p>
                </Link>
            </div>

        </div>
    )
}

export default Navbar