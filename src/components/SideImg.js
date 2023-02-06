import React from 'react'

export default function SideImg() {
    return (
        <div className='sideImg'>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='sideImgBg'>
                <path fill="#3B3636" d="M59.5,-16.6C66.2,1.4,53.3,28.4,33.4,41.9C13.5,55.4,-13.3,55.3,-29.2,43C-45.2,30.7,-50.3,6.4,-43.7,-11.6C-37,-29.5,-18.5,-41,3.9,-42.3C26.4,-43.6,52.8,-34.6,59.5,-16.6Z" transform="translate(100 100)" />
            </svg>
            <img src="sideImage.png" alt="error" id='person_img'/>
        </div>
    )
}
