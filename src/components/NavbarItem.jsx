// "use client"
import Link from 'next/link'
// import { useSearchParams } from "next/navigation";
import React from 'react'

export default function NavbarItem({ title, param }) {

    // const [searchParams, setSearchParams] = useSearchParams() ;
    // const genre = searchParams.get("genre") ;
    return (
        <div>
            <Link className={`m-4 hover:text-amber-600 font-semibold p-2 
            
            
            `} 
            href={`/?genre=${param}`}>
                {title}
            </Link>

        </div>
    )
}
