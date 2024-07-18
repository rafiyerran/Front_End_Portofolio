import React, { useState } from 'react'

import Avatar from "../../assets/4k background.jfif"
import ProjectCard from '../../components/project-card';

interface Projects{
    name: string;
    year: string;
    description: string;
}
const LandingPage = () => {
    
    const [increment, setIncrement] = useState<number>(0);
    const [toggle, setToggle] = useState<boolean>(false);

    const handleIncrement = () =>{
        setIncrement((prev) => prev + 1)
    }

    const handleDecrement = () =>{
        setIncrement((prev) =>(prev >= 1 ? prev - 1 : prev))
    }

    const handleToggle = () =>{
        setToggle((prev) => !prev)
    }

    const projects = [
        {
        name: "Project A",
        year: "2019 -2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident alias et nisi possimus, aspernatur reiciendis sed fugiat tenetur ab impedit a error minima vero saepequod corrupti facilis iusto!"
        },
        {
        name: "Project B",
        year: "2020 -2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident alias et nisi possimus, aspernatur reiciendis sed fugiat tenetur ab impedit a error minima vero saepequod corrupti facilis iusto!"
        },
        {
        name: "Project C",
        year: "2021 -2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident alias et nisi possimus, aspernatur reiciendis sed fugiat tenetur ab impedit a error minima vero saepequod corrupti facilis iusto!"
        },
        {
        name: "Project D",
        year: "2022 -2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident alias et nisi possimus, aspernatur reiciendis sed fugiat tenetur ab impedit a error minima vero saepequod corrupti facilis iusto!"
        },
    ]
  return (
    <div className="flex flex-col">
        
        <div className="flex flex-col justify-center items-center">
            <p>{increment} Increment</p>
            <div className="flex flex-row gap-5">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>

        <div className="flex flex-col justify-center items-center">
            {toggle ? <div>show hide componect</div> : <></>}
            <button onClick={handleToggle}>{toggle ? "hide" : "show"}</button>
        </div>

        <section className="flex flex-row justify-evenly items-center m-5">
            <div className="flex flex-col font-extrabold text-red-600">
                <h1>Hello World</h1>
                <p className="font-semibold text-red-600">Rafiy Erran</p>
            </div>
            <img src={Avatar} className="w-60 rounded-sm" />
        </section>

        <section className="flex flex-col px-5 py-10 bg-pink-300">
            <label className="font-bold text-lg text-red-600">Summary</label>
            <p className="text-base font-semibold text-justify text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Eum provident alias et nisi possimus, aspernatur reiciendis 
                sed fugiat tenetur ab impedit a error minima vero saepe
                quod corrupti facilis iusto!
            </p>
        </section>

        <section className="flex flex-col px-5 py-10 gap-10">
            <label className="font-bold text-lg gap-10 text-red-600">Projects</label>
            {projects.map((item: Projects, index: number) =>(
                < ProjectCard
                    key={index}
                    name={item.name}
                    year={item.year}
                    description={item.description}
                    bgColor={`${index % 2 === 0 ? 'bg-pink-300':''}`}
                />
            ))}
        </section>
    </div>
  )  
}

export default LandingPage

