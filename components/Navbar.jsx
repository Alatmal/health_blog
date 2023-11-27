import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full bg-slate-300">
      <div className="flex flew-row justify-between items-center">
      <nav className="max-w-[1440px] mx-auto">
        <Link href='/'>
          <h2 className="mx-auto text-xl">Logo</h2>
        </Link>
      </nav>
      </div>
    </header>    
  )
}

export default Navbar