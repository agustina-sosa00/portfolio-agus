import React, { useState } from 'react'
import menu from '../../assets/bars-solid.svg'
import close from '../../assets/xmark-solid (1).svg'
import { ContainerBurger } from './ContainerBurger'

export const Burger: React.FC = () => {
    const [menuState, setMenuState] = useState<boolean>(false)

    const handleOnClick = () => {
        setMenuState(!menuState)
    }

  return (
    <div className='w-[50px] h-[50px]'>
        {
            menuState ? (<button onClick={handleOnClick}><img src={close} alt="" className='w-[40px] h-[40px]'/></button>) : ( <button onClick={handleOnClick}><img src={menu} alt="" className='w-[40px] h-[40px]'/></button>)
        }

        {
            menuState ? (<ContainerBurger/>) : (null)
        }
    </div>
  )
}
