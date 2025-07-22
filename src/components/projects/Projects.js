import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food Delivery App"
          des=" A responsive and user-friendly web application built using React.js, designed to streamline the online food ordering experience. Users can browse restaurant menus, search and filter dishes, and place orders with ease."
          src={projectOne}
        />
        <ProjectsCard
          title="WishDev Clothing Website"
          des="A fully responsive clothing e-commerce platform built using React.js, offering a seamless shopping experience. 
          The website includes dynamic product listings, filtering by category, search functionality, and core features like add-to-cart, wishlist, and cart management."
          src={projectTwo}
        />
        <ProjectsCard
          title="Personal portfolio Website"
          des=" A fully responsive and modern portfolio website built using React.js to showcase my projects, skills, and experience. Designed with a clean UI and smooth navigation, the site features modular components, a project gallery, contact section, and highlights of my education and certifications."
          src={projectThree}
        />
        <ProjectsCard
          title="Razorpay Clone"
          des=" A responsive web application built using React.js, designed to replicate the core functionalities of Razorpay."
          src={projectFour}
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        /> 
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects