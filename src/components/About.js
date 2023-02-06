import React from 'react'
import SideImg from './SideImg'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <>
      <SideImg />
      <div className="intro">
        <div className="upper-text">About <span className='text-bold-grey'>ME</span> </div>
        <div className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi enim sunt, fugit nemo itaque aliquid architecto officiis inventore nesciunt facilis alias, incidunt rerum cupiditate minus dolorem consectetur porro delectus laudantium possimus provident rem officia labore eos! Numquam amet in ipsum, delectus alias animi qui placeat odit fugiat neque dolorum sed odio asperiores quod facere cum, eligendi quasi architecto facilis explicabo. Dignissimos saepe harum ut. Vel a quas, tempora nisi aliquid voluptate doloribus commodi? Dolorem nobis deserunt magnam eligendi numquam dolor cum nostrum quidem, quam reiciendis mollitia hic, at, laboriosam inventore.</div>
        <div className="contact"><NavLink to={'/This-page-is-not-ready-1'} className='con'><span>Contact</span>  <div  ><ion-icon id='arrow-icon' name="chevron-forward-outline"></ion-icon></div></NavLink></div>
      </div>
    </>
  )
}
