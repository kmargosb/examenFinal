
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full flex justify-center gap-8 bg-black py-2 px-10'>
            <Link href='/ejercicio1' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio1</p>
            </Link>
            <Link href='/ejercicio2' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio2</p>
            </Link>
            <Link href='/ejercicio3' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio3</p>
            </Link>
            <Link href='/ejercicio4' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio4</p>
            </Link>
            <Link href='/ejercicio5' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio5</p>
            </Link>
            <Link href='/ejercicio6' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio6</p>
            </Link>
            <Link href='/ejercicio7' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio7</p>
            </Link>
            <Link href='/ejercicio8' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio8</p>
            </Link>
            <Link href='/ejercicio9' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio9</p>
            </Link>
            <Link href='/ejercicio10' className='bg-white rounded py-1 px-4'>
                <p>Ejercicio10</p>
            </Link>

        </div>
    )
}

export default Navbar