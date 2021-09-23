import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/");
        }, 3000)
    }, [router])
    return ( 
        <div className="not-found">
            <h1>Ooooops....</h1>
            <h3>That page cannot be displayed</h3>
            <p>Go back to the<Link href="/">Home Page</Link></p>
        </div>
     );
}
 
export default NotFound;