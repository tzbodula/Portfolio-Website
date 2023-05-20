import React, { useState, useEffect } from 'react'
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import behance from "../assets/behance.png";
import logo from "../assets/logo-xl.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import { portfolio } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const PortfolioGrid = ({
  index,
  display,
  name,
  program,
  fill,
  stroke,
  description,
  tags,
  image,
  source_code_link,
}) => {
  console.log("Program: " + program)
  console.log("Display: " + display)
  console.log("Is program equal to display? " + (program === display))
  var displayItem = program === display
  return (
    <>
      {displayItem
        ?
          <>
            
            <div className='relative w-full h-full '>
              <img
                src={image}
                alt='project_image'
                className={`w-full h-full object-cover rounded-2xl border-2 border-[${stroke}]`}
              />

              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                >
                  <img
                    src={program == 'premierepro' ? youtube : program == 'aftereffects' ? instagram : program == 'indesign' ? logo : behance}
                    alt='source code'
                    className='w-1/2 h-1/2 object-contain '
                  />
                </div>
              </div>
            </div>
            <div className={`bg-[${fill}] border-2 border-[${stroke}] w-full rounded-2xl p-4`}>
              <div className='mt-2'>
                <h3 className='text-white font-bold text-[24px]'>Project Name: {name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>Project Description: {description}</p>
              </div>

              <div className='mt-2 flex flex-wrap gap-2'>
                <ul>

                
                {tags.map((tag) => (
                  <li
                    key={`${name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    {tag.name}
                  </li>
                ))}
                </ul>
              </div>
            </div>
            </>

        :
        null
      }
    </>




  );
}


const Portfolio = () => {
  const [display, setDisplay] = useState("photoshop")
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My creative work</p>
        <h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects are some of my favorite creative works that i've ever completed.
          <br></br>You can filter by specific program by clicking on the associated icon below.
        </motion.p>
      </div>
      <div className='my-4 flex flex-wrap gap-7'>
        <svg width='100' height='100'>
          <circle cx='50' cy='50' r='40' stroke='#4a90ff' stroke-width='4' fill={`${display == 'photoshop' ? '#4a90ff' : '#02132e'}`} className='z-10 hover:fill-[#4a90ff] transition-all' onClick={() => setDisplay("photoshop")} />
          <text fill='#f1f0f9' x="50%" y="58%" text-anchor="middle" className='z-20 font-justSansSemiBold text-3xl' >Ps</text>
        </svg>
        <svg width='100' height='100'>
          <circle cx='50' cy='50' r='40' stroke='#fa8e4b' stroke-width='4' fill={`${display == 'illustrator' ? '#fa8e4b' : '#361602'}`} className='z-10 hover:fill-[#fa8e4b] transition-all' onClick={() => setDisplay("illustrator")} />
          <text fill='#f1f0f9' x="50%" y="58%" text-anchor="middle" className='z-20 font-justSansSemiBold text-3xl' >Ai</text>
        </svg>
        <svg width='100' height='100'>
          <circle cx='50' cy='50' r='40' stroke='#c750fa' stroke-width='4' fill={`${display == 'premierepro' ? '#c750fa' : '#1f0124'}`} className='z-10 hover:fill-[#c750fa] transition-all' onClick={() => setDisplay("premierepro")} />
          <text fill='#f1f0f9' x="50%" y="58%" text-anchor="middle" className='z-20 font-justSansSemiBold text-3xl' >Pr</text>
        </svg>
        <svg width='100' height='100'>
          <circle cx='50' cy='50' r='40' stroke='#b81efa' stroke-width='4' fill={`${display == 'aftereffects' ? '#b81efa' : '#2c0233'}`} className='z-10 hover:fill-[#b81efa] transition-all' onClick={() => setDisplay("aftereffects")} />
          <text fill='#f1f0f9' x="50%" y="58%" text-anchor="middle" className='z-20 font-justSansSemiBold text-3xl' >Ae</text>
        </svg>
        <svg width='100' height='100'>
          <circle cx='50' cy='50' r='40' stroke='#fa1e1e' stroke-width='4' fill={`${display == 'indesign' ? '#fa1e1e' : '#260101'}`} className='z-10 hover:fill-[#fa1e1e] transition-all' onClick={() => setDisplay("indesign")} />
          <text fill='#f1f0f9' x="50%" y="58%" text-anchor="middle" className='z-20 font-justSansSemiBold text-3xl' >Id</text>
        </svg>
      </div>
      <div className='flex flex-wrap gap-7'>

        {portfolio.map((project, index) => (
          <PortfolioGrid key={`project-${index}`} index={index} display={display} {...project} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Portfolio, "portfolio");