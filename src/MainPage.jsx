import './MainPage.css'
import { VscBook } from "react-icons/vsc";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegMoon } from "react-icons/fa";
import { BsQuestionSquareFill } from "react-icons/bs";



export default function MainPage(){
    return(
        <section className='mainpage-section'>
            <div className="mainpage-header-container">
                <VscBook/>
                <MdArrowBackIos className='left-icon'/>
                <MdArrowForwardIos/>
                <CiLock className='lock'/>
                <p className='header-p'>My private channel / 👋Getting started</p>
                <div className="share-rate">
                <p>Share</p>
                <FiMessageCircle className='message'/>
                <FaStar className='star'/>
                <BsThreeDotsVertical/>
                </div>
            </div>
            <div className='mainpage-content'>
                <h1>Getting started</h1>
            <div className="getting-started">
                <div className='first-paragraph'>
                    <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnElEQVR4nO1XW0wcZRReo49e4qsmmlrbxmjTRBPTB030QR80MTEmxof6II1SaLtViW0kTQNVJBAECstl6d5ndpaZXaCALF33ygJ7oQPuLndYRa42krSxUC4i+5nzW0h8aRV3oYlzkpPdf+afb853znfOzKhUiil2/1gsFjsYj8fPJhIJTzweH00kEsvkd/676RztUd1vFo1Gn5dl+buBgQGQ9/f339VlWfbIsvziXset8vv9D4VCoUuRSCQ1PDyM8fFxRiASidzTw+HwZjgcLieMPQne7XY/FgwGv49GoyxwcspuT08PgsEg8+7u7m2n47Q3HA7/7bjX672VSCQe39XgKWsej8fV19fHAh8ZGWGBeb1eOJ1O2O12WHk+xVksf5BbrdZUU1MTOx+Lxdh+utbv98PlcqGlpSUlSdKDu0ags7OzvKurC2NjYxgaGkIgEGCB2wQBgiDMSY2NX0qS9PDWfp1O94jdbj8nCMKsJIqMRDKZZL9EoLm5GaIobu5K8O3t7Uc6Ojo2R0dHQbqnrLa2tlLGN0RR/Oxe10uSdMrK8+tUgcnJSUaCrud5nkhIGSfgcDg6qQlJOqRzyh7PcRs2m+3Nf4rBcdyrgiCsUMNPTEywXuA4DjqdDhkN3maz7Sd9k3Ti8TgLXiDZ8Hzhv8XieV7tcDhSW5V0OByoqamB0Wj8NDPR/5W5z0mzW9mnrJlMplkAD+wEz2KxRHt7e1kVPB4PqqqqUFlZmVJlygwGg0uWZUaAdGswGKDX66t3imc2m09TRQmPcIlASUlJ5mSk1WpHaeqQk3QaGhqIxOGd4nEc96hOp9vYwiS8wsLCzBGorq5eohlOk0Ov1zPNajSa7XG5E9NoNDPUzNQLZrMZ+fn5mSNQUVHBGpjKXVtbC1qnATNGU41wqafy8vIyR6C0tJTdiG5IeqV1GjBj9ESmPjAajVCr1ZkjUFRUxEodCoVQVlYGWqcBM+bz+Vhi6DmQnZ2dOQIFBQWMAL2YFRcXg9ZpwIy53W5GoL6+HllZWekjMBMqw1KyGRs34vh9MYr1OSfWZtuwPtuCtWl7Wn2dMAl73omV6Tb8Gjdj7OpX8Ncd2zmhwZYcTAcv4ubwZQa+uuDH8k9XcCvpwNKPV7A01Y7lKSduT7twe9aNlTkPVhd8WJv3Ym3Bj/XrAaz/EsDagg8rs262Z2nKiZvJNiwOipi7ZkCyqxJDHQUIWXLgqnwX0oWj4PNegD5nH7RZTzBPC4HVn0UsJ634bcyEG0M6LMbqcF2uxnykHDM9pZgKFCHpKcD41fMY6TiHwdY8xJrU6Bdz0Wf9GGHzR+jRH0OX9gP4at6D+9I7uPrtW+gofQNt37yOlouvwHHhKBrzX1IIbJtSgSZFQlCaeFqZQrnKGFXt1JQx2qSMUShjdFoZo7nKGFUpY3RY+aCB8kW2268S9BSWG3MQvfM9vCcVuMZ/iAExGz/YTyLKHUeg7n24yt9G69evwX7+ZQhfHIE17zAsZ56D6dQBGHL34/InT93V9Sf2wZDzDNtrPPksc9PpAzCrD8KsPgTTmUMMS3fiaWiPP/nfCCim2P/A/gQMX+j6F9tRMQAAAABJRU5ErkJggg=="></img>
                    This doc is in your <span>private channel,</span>where you can store 
                    your private work. You can share docs one by one from here, but
                    to properly organize your team's knowledge base, use <span>workspace channels.</span>
                    </p>
                </div>
                
                <p className='second-paragraph'>You can make channels <span>public</span> to make all docs visible to
                everyone on the team, or <span>private</span> if you want the channel's docs
                to only be visible by a selection of teammates.
                </p>

            </div>
            <h2>Collaborate with your team with these three featuers.</h2>
            <h3>✍Docs</h3>
            <img src="./assets/mainPage.png" alt="docs" className='mainpage-img'/>
            <div className="idea-p-container">
            <p className='idea-p'>
            <img width="16" height="16" src="https://img.icons8.com/office/16/idea.png" alt="idea"/>
            Give it a go by typing<span> / </span>below
            </p>
            </div>
            </div>
            <div className="moon-question-icons">
            <FaRegMoon className='mainpage-icon'/>
            <BsQuestionSquareFill className='mainpage-icon'/>
            </div>
            
            
        </section>
    )
}