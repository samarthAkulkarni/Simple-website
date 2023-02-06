import React from 'react'
import SideImg from './SideImg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <SideImg />
      <div className="intro">
        <div className="upper-text">Hi, my name is <span className='text-bold-grey'>Samarth</span> </div>
        <div className="upper-text">And I am <span className='text-bold-grey'>Web developer</span></div>
        <div className="para">I have started coding since from 3 years, <br /> And now I have some couple of coding skills!</div>
        <div className="contact"><NavLink to={'/This-page-is-not-ready-1'} className='con'><span>Contact</span>  <div  ><ion-icon id='arrow-icon' name="chevron-forward-outline"></ion-icon></div></NavLink></div>
      </div>
      

    </>
  )
}
