import Link from "next/link"
export default function Navbar() {
    return(
    <header className ="w-full border-b-1 border-sky-200  bg-sky-800">
        <div className="flex items-center justify-between py-6 px-6">

            <span className="text-4xl text-white font-semi-bold">
            🔒SpooKey
            </span>

            <nav className="flex items-center gap-6">
                <Link href="/" className="text-white">
                    Modules
                </Link>
                <Link href="/" className="text-white">
                    About us
                </Link>
            </nav>
        </div>
    </header>
    )
}