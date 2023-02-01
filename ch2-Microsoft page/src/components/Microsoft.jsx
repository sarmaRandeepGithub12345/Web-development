import React from 'react'

//for navbar images
import biglogo from "../images/1-navbar/biglogo.jpg"
import search from "../images/1-navbar/search.png"
import cartlogo from "../images/1-navbar/cartlogo.jpg"
import signin from "../images/1-navbar/signin.png"

//for below navbar images
import sliderImage1 from "../images/2-below navbar/sliderimage1.jpg"
import sliderImage2 from "../images/2-below navbar/sliderimage2.jpg"
const Microsoft = () => {
  return (
    <>
      <div className='container flex flex-col'>
        <div className="Navbar flex flex-row justify-between px-2 py-2">
          <div className='one flex flex-row justify-center items-center'>
            <div className="navbarOptions p-2 cursor-pointer">
              <div className="firstline  w-5 h-0.5 bg-black my-1"></div>
              <div className="secondline w-5 h-0.5 bg-black my-1"></div>
              <div className="thirdline w-5 h-0.5 bg-black my-1"></div>
            </div>
            <div className='Search cursor-pointer'>
              <img className="h-6 pl-2" src={search} alt="Search" />
            </div>
          </div>
          <div className='two flex justify-center items-center cursor-pointer'>
            <img className="h-6" src={biglogo} alt="Big Logo Microsoft" />
          </div>
          <div className='three flex flex-row justify-center items-center'>
            <div className="three-one">
              <img src={cartlogo} className="h-6 pr-5 cursor-pointer" alt="cartlogo" />
            </div>
            <div className="three-two">
              <img src={signin} className="h-6 pr-2 cursor-pointer" alt="Sign In" />
            </div>

          </div>
        </div>
        <div className="belowNavbar">
          <div className="sliderimage">
            <img src={sliderImage1} alt="Slider Image" />
          </div>
          <div className='below-slider'>
            <p className="text-2xl font-semibold">Microsoft 365</p>
            <p>Everything you need to achieve more in less time</p>
            <div className="button-below-slider flex flex-row">
              <button className="button1 bg-blue-500 font-semibold text-white p-2 rounded-sm cursor-pointer">
                <a href="#">For one person</a>
              </button>
              <button className="button2 text-blue-600 font-semibold p-2 cursor-pointer flex flex-row mx-2">
                
                <a href="#" className='hover:underline'>For up to six people </a>
                <div className='pl-2 '>&gt;</div>
              </button>


            </div>
          </div>
        </div>
        <div className="smallTools">Small Tools</div>
        <div className="newObjects">New Objects</div>
        <div className="gaming">Gaming</div>
        <div className="business"> Business</div>
        <div className="links">Links</div>
        <div className='footer'>Footer</div>
      </div>
    </>
  )
}

export default Microsoft