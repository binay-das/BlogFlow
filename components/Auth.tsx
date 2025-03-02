import Link from "next/link"

export default function () {
    let status = 'not'
    return <div className="">
        {status === 'not' ? <Link href={'/signin'}>Sign In</Link> : <Link href={'/logout'}>Sign Out</Link>}
    </div>
}