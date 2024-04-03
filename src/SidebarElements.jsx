import './SidebarElements.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiMetalHand } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { useState } from 'react';
import { CiLock } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiNotebook } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import { RiShareForward2Fill } from "react-icons/ri";
import { IoArchive } from "react-icons/io5";
import { CgTemplate } from "react-icons/cg";




export default function SidebarElements(){
    const [privateDropDown, setPrivateDropDown] = useState(true)
    const [engineeringDropDown, setEngineeringDropDown] = useState(true)
    const [productDropDown, setProductDropDown] = useState(true)
    

    const togglePrivateMenu = ()=>{
        setPrivateDropDown((prev)=>!prev)
    }
    const toggleEngineeringMenu = ()=>{
        setEngineeringDropDown((prev)=>!prev)
    }
    const toggleProductDropDown = ()=>{
        setProductDropDown((prev)=>!prev)
    }
    return(
        <section className='siderbar-elements-section'>
            <div className="team-container">
                <img src="./assets/pfp.png" alt="profile picture" />
                <p>refero team</p>
                <IoIosNotificationsOutline className='bell-icon'/>
            </div>
            <div className="input-container">
                
                {/* <GiMetalHand className="metal-hand-icon"/> */}
                <input type="text" placeholder={`Ask you AI assistant`}/>                
                <div className='search-icon-container'>
                <CiSearch className='search-icon'/>
                </div>
            </div>
            <div className="subscribtion">
                <h4>Your team used 8/50 free docs</h4>
                <p>Upgrade to create unlimited docs</p>
            </div>
            <p>
                <CiClock2 className='icon'/>
                Catch up
            </p>
            <p>
                <TiMessages className='icon'/>
                Discussions
            </p>
            <p className='bold'>Favorites</p>
            <p>👋Getting started</p>
            <p className='bold'>My channels</p>
            <div className='private-dropdow-menu'>
                <p onClick={togglePrivateMenu}>
                    {privateDropDown? <IoMdArrowDropright className='arrow'/> : <IoMdArrowDropdown className='arrow'/>}
                    <CiLock className='icon'/> My private channel</p>
            </div>
            {
                privateDropDown? <></>:<p className='dropdown-list'>👋Getting started</p>
            }
            <div className='private-dropdow-menu'>
                <p onClick={toggleEngineeringMenu}>
                    {engineeringDropDown? <IoMdArrowDropright className='arrow'/> : <IoMdArrowDropdown className='arrow'/>}
                    <PiNotebook className='icon'/>Engineering</p>
            </div>
            <div className='private-dropdow-menu'>
                <p onClick={toggleProductDropDown}>
                    {productDropDown? <IoMdArrowDropright className='arrow'/> : <IoMdArrowDropdown className='arrow'/>}
                    <PiNotebook className='icon'/>Product</p>
            </div>
            <div className='links'>
                <p><RiUserAddLine className='icon'/> Add people</p>                
                <p><CgTemplate className='icon'/> Templates</p>
                <p><RiShareForward2Fill className='icon'/> Shared with me</p>
                <p><IoArchive className='icon'/> Archive</p>

            </div>
        </section>
    )
}