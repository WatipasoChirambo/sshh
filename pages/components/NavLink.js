import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


function NavLink({ href,children}) {
    const router = useRouter()
    let className = children.props.className || ''
    if(router.pathname === href){
        className = `${className}`
    }
    return (
        <Link href={href}>
            {React.cloneElement(children, {className})}
        </Link>
    )
}

export default NavLink
