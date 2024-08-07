import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { ContainerBurger } from './ContainerBurger'

export const Burger: React.FC = () => {
    const [menuState, setMenuState] = useState<boolean>(false)

    const handleOnClick = () => {
        setMenuState(!menuState)
    }

  return (
    <>
    <div className='w-[50px] h-[50px]'>
        {
            menuState ? (<button onClick={handleOnClick}><MdClose className='w-[40px] h-[40px] text-[#77530a] hover:text-gray-600'/>
                </button>) : ( <button onClick={handleOnClick}><RxHamburgerMenu className='w-[40px] h-[40px] text-[#77530a] hover:text-gray-600'/></button>)
        }
        {
            menuState ? (<ContainerBurger/>) : (null)
        }
    </div>
   
    </>
    
  )
}
