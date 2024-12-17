"use client"
import { useState } from 'react'

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="bg-yellow-300 p-6 mb-8 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
      <div className="flex flex-col items-center space-y-2">
        <h1
          className={`text-5xl font-black text-black transform ${isHovered ? '-rotate-2' : 'rotate-2'} transition-transform duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          PRO MAIL
        </h1>
        <p className="text-xl font-bold text-black bg-pink-400 px-4 py-2 transform -rotate-1 border-2 border-black">
          Quick, Easy, Disposable
        </p>
      </div>
    </header>
  )
}

