import React from 'react'

const Navbar = () => {
    return (
      <div className="flex flex-row w-full justify-between px-5 py-3 shadow-md bg-pink-300">
        <h2 className=" text-base font-bold text-red-600">Portofolio</h2>
        <div className="flex flex-row font-bold gap-5 text-red-600">
            <a href="#">Home</a>
            <a href="#summary">Summary</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
        </div>
      </div>
    )
}

export default Navbar