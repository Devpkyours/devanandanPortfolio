import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech - Computer Science - Artificial Intelligence and Machine Learning"
            subTitle="Lakshmi Narain College of Technology Excellence - Bhopal (2022 - 2025)"
            result="7.4/10"
            des="Successfully completed B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning. Gained strong proficiency in programming, data structures, and modern development frameworks."
          />
          <ResumeCard
            title="Diploma "
            subTitle="Government Polytechnic College - West Champaran (2018 - 2021)"
            result="74.2%"
            des="Completed a 3-year diploma in Civil Engineering, gaining knowledge in structural design, construction materials, surveying, and project planning. Although from a different domain, this program helped develop my analytical thinking, discipline, and problem-solving approach — skills that now support my journey in software development."
          />
          <ResumeCard
            title="Secondary School"
            subTitle="Mother Teresa Vidyapeeth (2017 - 2018)"
            result="76.6%"
            des="Built a solid academic foundation in mathematics, science, and logical reasoning. Developed early interest in technology and coding which led to pursuing a career in software development."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer intern"
            subTitle="Nextag Media Pvt. Ltd. - (  Jan 2024 - June 2024)"
            result="Noida, India "
            des="Collaborated with a team of developers to build responsive and interactive web interfaces using HTML, CSS, JavaScript, and React.js. Translated design concepts into functional UI components, including sliders, modals, and forms.

" */}
          {/* /> */}
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        {/* </div> */}
      {/* // </div> */} 
    </motion.div>
  );
};

export default Education;
