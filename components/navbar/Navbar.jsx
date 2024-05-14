import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-around'>
            <div>
                <Link href='/'>Blog</Link>
            </div>
            <div>
                <Link href='/login' className='my-2'>
                    Login
                </Link>
                <Link href='/register' className='my-2'>
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
