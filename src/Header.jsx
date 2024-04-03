import './Header.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


export default function Header(){
    return(
        <section className='header-section'>
            <p>Enable browser notifications to avoid missing out on important activity</p>

            <div>
                <button>
                <IoIosNotificationsOutline/>
                Enable notifications
                </button>  
                <IoCloseOutline className='close-icon'/>
            </div>

        </section>
    )
}