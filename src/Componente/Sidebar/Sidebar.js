
import React from 'react';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import image from '../../images/IMG20220503174950_01 (2).jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { getToStorage, setToStorage } from '../../Utilities/stroage';

const Sidebar = ({time}) => {
 const done = () =>{
    Swal.fire(
        'Good job!',
        'Your Activity Is Completed',
        'success'
      )
 }
    const [breakTime,setBreakTime] = useState(0)
    const addBreak = (value) => {
        let breakingTime = 1
      if(value === '10s'){
        breakingTime = 10 ;
      }
      else if(value === '20s'){
        breakingTime = 20 ;
      }
      else if(value === '30s'){
        breakingTime = 30 ;
      }
      else if(value === '40s'){
        breakingTime = 40 ;
      }
      else if(value === '50s'){
        breakingTime = 50 ;
      }
      setToStorage(breakingTime)
      setBreakTime(breakingTime)
    }
    useEffect(()=>{
      const oldBreakTime = getToStorage()
      setBreakTime(oldBreakTime)
    },[breakTime])
    return (
        <div className='side-bar'>
            <div className='profile-info'>
                <img className='thumb' src={image} alt="" />
                <div >
                    <h4>MD Rifat</h4>
                    <p><span> <FontAwesomeIcon icon={faLocationDot} /></span> Dhaka,Bangladesh</p>
                </div>
            </div>
            <div className='info'>
                <div>
                    <h5><strong className='large'>54</strong><small>kg</small></h5>
                    <p>Weight</p>
                </div>
                <div className='spcial'>
                    <h2>5.6</h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h5><strong className='large'>17</strong><small>yrs</small></h5>
                    <p>Age</p>
                </div>
            </div>
            <div className='break'>
                <h3>Add A Break</h3>
                <div className='break-btn'>
                <button onClick={(e)=>addBreak(e.target.innerText)}>10s</button>
                <button onClick={(e)=>addBreak(e.target.innerText)}>20s</button>
                <button onClick={(e)=>addBreak(e.target.innerText)}>30s</button>
                <button onClick={(e)=>addBreak(e.target.innerText)}>40s</button>
                <button onClick={(e)=>addBreak(e.target.innerText)}>50s</button>
                </div>
            </div>
            <div className='all-Exercise'>
                <h2>Exercise Details</h2>
                <div className='Exercise'>
                    <p>Exercise time</p>
                    <p>{time}s</p>
                </div>
                <div className='Exercise'>
                    <p>Break time</p>
                    <p>{breakTime}s</p>
                </div>
            </div>
            <button onClick={done} className='Activity'>Activity Completed</button>
        </div>
    );
};

export default Sidebar;