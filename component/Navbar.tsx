import Link from "next/link"
const Navbar = () => {
  return (
    <header>
        <nav className="flex items-center h-20 px-5 border-b-1 border-gray-200">
            <section className="flex items-center">
                <h1>
                    <Link href='./' className="mx-5 text-2xl font-bold text-blue-800">JobFinder</Link>
                </h1>
            </section>
            <section className="flex justify-between w-full pt-1">
                <section>
                    <ul className="flex gap-4 text-slate-600">
                        <li>
                            <Link href='./browse-job'>Job Search</Link>
                        </li>
                        <li>
                            <Link href='./profile'>Profile</Link>
                        </li>
                        <li>
                            <Link href=''>Company review</Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <ul className="flex gap-5">
                        <li>
                            <Link href='/' className="font-semibold text-blue-700 border-r-1 border-gray-300 px-5 py-1">Sign in</Link>
                        </li>
                        <li>
                            <Link href='/' className="text-slate-600">Employers / Post Job</Link>
                        </li>
                    </ul>
                </section>
            </section>
        </nav>
    </header>
  )
}

export default Navbar
