import { useEffect, useState } from "react";

export function Navbar() {
    const [tanggal, setTanggal] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setTanggal(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
      })

    return (
    <nav className='px-6 py-4'>
        <div className='flex justify-between items-center'>
          <span className='w-[60px] sm:w-[80px] lg:w-[100px]'><img src="i-kios.png" alt="Logo I-Kious" /></span>
          <div className='flex flex-col'>
            <span className='text-xl sm:text-2xl font-bold text-center'>{tanggal.toTimeString().substring(0,5).replace(':', '.')}</span>
            <span className='text-xs text-center '>{tanggal.toDateString()}</span>
          </div>
          <span className='w-[60px] sm:w-[80px] lg:w-[100px]'><img src="indomaret-logo.png" alt="Logo Indomaret" /></span>
        </div>
      </nav>
    )
}