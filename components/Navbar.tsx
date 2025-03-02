import Link from "next/link";
import Auth from "./Auth";

export default function () {
    return <div className="border flex justify-between items-center bg-blue-200 text-black px-4 py-2 text-xl">
        <h1 className="text-3xl m-2">BlogFlow</h1>
        <div className="flex md:gap-20 gap-8">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Contact</Link>
            <Link href={'/'}>About</Link>
            <Auth />
        </div>
    </div>
}