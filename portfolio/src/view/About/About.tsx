import React from 'react'
import '../../App.css'
import { arrayTec } from '../../helpers/arrayTechnology'
// import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div id='/about' className='w-full min-h-screen bg-white p-10 flex justify-center items-center'>
      <div className='w-[90%] h-[90%] flex'>
         {/* <div className='w-1/2 h-full flex justify-center items-center '>
      <div className='relative w-full h-[100%] flex justify-center items-center'>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className='absolute top-0 left-0  z-0 '
        >
          <img src="https://i.ibb.co/sRT0zBq/Logo-ropa-mujer-ilustrativo-negro-1-Photoroom.png" alt="Zigzag" className='w-[500px] h-[600px]' />
        </motion.div>
        
        <img 
          src="https://i.ibb.co/bRW8GzW/Whats-App-Image-2024-08-15-at-17-18-Photoroom.png" 
          alt="" 
          className='w-[220px] h-[400px] relative z-10  right-32 imgEffectLeft'
        />
      </div>
        </div> */}
        <div className="sparkle-container w-1/2 h-[100%] ">
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className="star"></div>
  <div className='w-[400px] h-[500px] flex justify-center items-center bgAbout'>
  <img 
          src="https://i.ibb.co/bRW8GzW/Whats-App-Image-2024-08-15-at-17-18-Photoroom.png" 
          alt="" 
          className='w-[220px] h-[400px]  imgEffectLeft '
        />
  </div>
 
</div>



        <div className='w-1/2 h-[500px] flex flex-col justify-center items-center'>
          <p >Desarrolladora Frontend con experiencia en <span>React, Next.js, JavaScript, Typescript</span> entre otras. Ofrezco soluciones digitales completas y atractivas que impulsan el éxito del proyecto. Soy colaborativa, comunicativa y comprometida con la calidad. Mantengo mi conocimiento actualizado con las últimas tendencias y tecnologías en desarrollo web.</p>
          <div className=" w-full h-250px flex justify-center items-center overflow-hidden">
            <div className=" w-3/4 h-250px flex items-center overflow-hidden">
            <div className="slideTrack">
  {[...arrayTec, ...arrayTec].map((tec, index) => (
    <div key={index} className="slide">
      <h2 className='text'>{tec.name}</h2>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




